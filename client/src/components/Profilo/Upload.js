import React, { useState } from 'react'
import UploadModal from './UploadModal';

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadModal, setUploadModal] = useState(false)
  const [responseText, setResponseText] = useState()
  const [responseColor, setResponseColor] = useState()

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
    toggleModal()
  };

  const toggleModal = () => {
    if (uploadModal)  setUploadModal(false)
    else  setUploadModal(true)
  }



  return (
    <div>
      {uploadModal && <UploadModal setResponseText={setResponseText} setResponseColor={setResponseColor} toggleModal={toggleModal} selectedFile={selectedFile} />}
      <input className='' type="file" onChange={handleFileInputChange} />
      <span className={responseColor}>{responseText}</span>
    </div>
  )
}

export default Upload