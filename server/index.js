// connecting to the db
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/note-commerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const User = require('./Users')
const Pdf = require('./Pdf')
const Uni = require('./University')
const Language = require('./Languages')
// const fetchssss = require('node-fetch');


// server routing
const express = require('express')
const cors = require('cors')
const multer = require('multer')
const PDFLib = require('pdf-lib')


const app = express()
const upload = multer(); // Middleware per la gestione del caricamento dei file

app.use(cors()) //enables cross origin comunication
app.use(express.json()) //parses the body of incoming requests and, if the request's 
                        // content type is JSON, automatically converts it into a usable JavaScript object.

// check if the user.mail already exists into the db
const checkDuplicateUser = async (req, res, next) => {
  try {
    const { email } = req.body;

    // Verifica se esiste già un utente con lo stesso nome nel database
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "Esiste già un utente con lo stesso nome" });
    }

    // Se l'utente non è duplicato, passa al middleware successivo
    next();
  } catch (error) {
    // Gestisci eventuali errori
    res.status(500).send("Errore durante la verifica dell'utente duplicato");
  }
};

// add new user into the db
app.post('/registration', checkDuplicateUser, async (req, res) => {
  try {
    const { name, surname, email, password, university } = req.body;
    // creates the new user and saves it into the db
    const user = await User.create({ name, surname, email, password, university})
    const { _id } = user

    res.status(200).json({
      message: "Utente inserito correttamente nel database",
      userId: _id,
    });
  } catch {
    res.status(500).json({
      message: "Errore durante l'inserimento dell'utente nel database",
    });
  }

})


// check if the user exists and have the rigth password
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Cerca l'utente nel database
    const user = await User.findOne({ email, password });

    if (user) {
      const { _id, premium, university } = user
      console.log("premium:",premium)
      res.json({
        message: 'L\'utente esiste nel database.',
        user: email,
        userId: _id,
        premium: premium,
        university: university
      });
    } else {
      res.status(500).json({
        messaggio: 'L\'utente non esiste nel database.',
      });
    }
  } catch (err) {
    console.error('Errore nella verifica dell\'utente:', err);
    res.status(500).send('Si è verificato un errore nella verifica dell\'utente.');
  }
})

// uploads the pdf recived
app.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    const content = req.file.buffer; // Ottiene il contenuto del file PDF caricato
    let { name, university, year, course, language, creator } = req.body;

    // conta le pagine del pdf
    const pdfDoc = await PDFLib.PDFDocument.load(content);
    const numPages = pdfDoc.getPageCount();

    // per ogni file ricevuto salva la relativa lingua e università di
    // provenienza nel db se queste non sono già presenti
    const languages = await Language.find({}, 'name')
    const langNames = languages.map(lan => lan.name.toLowerCase())
    language = language.toLowerCase()
    if (!langNames.includes(language)) await Language.create({name: language})

    const unis = await Uni.find({}, 'name')
    const unisNames = unis.map(uni => uni.name.toLowerCase())
    university = university.toLowerCase()
    if (!unisNames.includes(university)) await Uni.create({name: university})

    // inserisce il pdf ricevuto nel db
    const pdf = await Pdf.create({ name, numPages, university, year, content, course, language, creator })

    // inserisce l'id del pdf nell'array createdPdfs del rispettivo creatore
    await User.updateOne(
      { _id: creator },
      { $push: { createdPdfs: pdf._id } }
    )

    res.send("Pdf inserito correttamente nel database")
  } catch (err) {
    console.error('Errore nell\'inserimento dell pdf:', err);
    res.status(500).send('Si è verificato un errore nell\'inserimento dell pdf.');
  }
})

// returns pdfs that respects the applied filters
app.get('/download', async (req, res) => {
  try {
    let { name, university, language, course } = req.query

    if (course == '') {
      course = name
    }

    let pdfs
    if (!university == '') {
      pdfs = await Pdf.find({
        $or: [
          { name: { $regex: name, $options: 'i' } },
          { course: { $regex: course, $options: 'i' } }
        ],
        university: { $eq: university },
        language: { $eq: language }
      })
    }
    else {
      pdfs = await Pdf.find({
        $or: [
          { name: { $regex: name, $options: 'i' } },
          { course: { $regex: course, $options: 'i' } }
        ],
        language: { $eq: language }
      })
    }

    // display the pdf and prevent the default download
    res.set('Content-Disposition', 'inline');
    res.status(200).send(pdfs);
  } catch (err) {
    res.status(500).send("Errore durante la ricerca dei documenti", err.message);
  }
})

// returns the pdf matching the clicked preview by the client
app.get('/downloadOne', async (req, res) => {
  try {
    // const { _id } = req.body
    const { _id } = req.query
    const pdf = await Pdf.findById(_id);
    // console.log(_id, " :downloadOne ok")

    // display the pdf and prevent the default download
    res.set('Content-Disposition', 'inline');

    res.send(pdf.content);
  } catch (err) {
    res.status(500).send("Errore durante il recupero del documento");
  }
})

// return saved pdfs by a specific user
async function retrieveSavedPDFsMiddleware(req, res, next) {
  const { _id } = req.body
  const user = await User.findById(_id);
  const pdfs = [];

  try {
    // to use await inside a no async function like map
    await Promise.all(
      user.savedPdfs.map(async (pdfId) => {
        const pdf = await Pdf.findById(pdfId);
        // console.log(pdfId)
        pdfs.push(pdf);
      })
    );
    req.pdfs = pdfs; // Memorizza gli oggetti PDF nell'oggetto di richiesta
    next();
  } catch (error) {
    res.status(500).json({ error: 'Errore durante il recupero degli oggetti PDF salvati' });
  }
}
app.post('/userSavedPdfs', retrieveSavedPDFsMiddleware, (req, res) => {
  res.json(req.pdfs); // Invia gli oggetti PDF come risposta
});

// return saved pdfs ids by a specific user
app.post('/savedPdfsIds', async (req, res) => {
  try {
    const { _id } = req.body
    const user = await User.findById(_id);
    res.status(200).send(user.savedPdfs)
  } catch (error) {
    res.status(500).send("Errore durante il recupero degli Id")
  }
})

// return created pdfs by a specific user
async function retrieveCreatedPDFsMiddleware(req, res, next) {
  const { _id } = req.body
  const user = await User.findById(_id);
  const pdfs = [];

  try {
    // to use await inside a no async function like map
    await Promise.all(
      user.createdPdfs.map(async (pdfId) => {
        const pdf = await Pdf.findById(pdfId);
        // console.log(pdfId)
        pdfs.push(pdf);
      })
    );
    req.pdfs = pdfs; // Memorizza gli oggetti PDF nell'oggetto di richiesta
    next();
  } catch (error) {
    res.status(500).json({ error: 'Errore durante il recupero degli oggetti PDF creati' });
  }
}
app.post('/userCreatedPdfs', retrieveCreatedPDFsMiddleware, (req, res) => {
  res.json(req.pdfs); // Invia gli oggetti PDF come risposta
});

// removes a saved pdf from a specific user
app.post('/removeSavedPdf', async (req, res) => {
  const { userId, pdfId } = req.body

  try {
    await User.updateOne(
      { _id: userId },
      { $pull: { savedPdfs: pdfId } }
    )
    res.status(200).send("pdf rimosso dai preferiti")

  } catch (error) {
    res.status(500).json({ error: 'Errore durante la rimozione del PDF salvato' });
  }
})

// removes a created pdf from a specific user
app.post('/removeCreatedPdf', async (req, res) => {
  const { userId, pdfId } = req.body

  try {

    await Pdf.findByIdAndRemove(pdfId)
    console.log("removed")

    await User.updateOne(
      { _id: userId },
      { $pull: { createdPdfs: pdfId } }
    )
    
    // se il pdf è stato salvato da un utente, lo elimino da savedPdfs
    await User.updateMany(
      {  },
      { $pull: { savedPdfs: pdfId } }
      )
  
    res.status(200).send("pdf rimosso correttamente")

  } catch (error) {
    res.status(500).json({ error: 'Errore durante la rimozione del PDF creato' });
  }
})

// adds a new pdf inside user' saved pdfs
app.post('/savePdf', async (req, res) => {
  const { userId, pdfId } = req.body

  try {
    await User.updateOne(
      { _id: userId },
      { $push: { savedPdfs: pdfId } }
    )
    res.status(200).send("pdf salvato nei preferiti")
  } catch (error) {
    res.status(500).json({ error: 'Errore durante il salvataggio del PDF' });
  }
})

// creates a specific subscription to a user
app.post("/create-subscription", async (req, res) => {
  const { userId, subscriptionType, subscriptionDate } = req.body

  try {
    await User.updateOne(
      { _id: userId },
      { $set: { premium: true, subscriptionType: subscriptionType, subscriptionDate: subscriptionDate } }
    )
    res.status(200).send("Acquisto effettuato con successo")
  } catch (error) {
    res.status(500).send("Acquisto non effettuato correttamente")
  }
})

// check subscription validity
app.post('/checkSubscription', async (req, res) => {
  const { userId } = req.body;

  try {
    // Cerca l'utente nel database
    const user = await User.findById(userId);

    let { subscriptionDate, subscriptionType, premium, email, _id, university } = user
    const currentDate = new Date()

    let message
    let maxMonth
    if (premium && subscriptionType != "root") {
      // Calcolo della differenza in millisecondi tra le due date
      const timeDifference = currentDate.getTime() - subscriptionDate.getTime();
      // Conversione della differenza in millisecondi in mesi
      const millisecondsInMonth = 1000 * 60 * 60 * 24 * 30; // approssimazione: 30 giorni al mese
      const monthsDifference = timeDifference / millisecondsInMonth;

      switch (subscriptionType) {
        case "Anunale":
          maxMonth = 12
          break
        case "Trimestrale":
          maxMonth = 3
          break
        case "Mensile":
          maxMonth = 1
          break
      }

      if (monthsDifference >= maxMonth) {
        message = 'Sono passati' + maxMonth + 'mesi. Il tuo abbonamento è scaduto!!!'
        await User.updateOne(
          { _id: _id },
          { $set: { premium: false, subscriptionType: "", subscriptionDate: null } }
        )
        premium = false
      }
      else {
        message = 'Il tuo abbonamento è ancora valido.'
      }
    }
    else {
      message = "abbonamento valido"
    }
    res.json({
      message: message,
      user: email,
      userId: _id,
      premium: premium,
      university: university
    });
  } catch (err) {
    console.error('Errore nella verifica dell\'abbonamento:', err);
    res.status(500).send('Si è verificato un errore nella verifica dell\'abbonamento.');
  }
})

app.get("/universities", async (req, res) =>{
  try{
    const unis=Uni.find({}, 'name')
    res.status(200).send((await unis).map(uni => uni.name))
  }catch(error) {
    res.status(500).send('Errore nel recupero delle università')
  }
})

app.get("/languages", async (req, res) =>{
  try{
    const languages=Language.find({}, 'name')
    res.status(200).send((await languages).map(lan => lan.name))
  }catch(error) {
    res.status(500).send('Errore nel recupero delle lingue')
  }
})

app.listen(3500)