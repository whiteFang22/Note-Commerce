import React, { useState } from 'react'
import UploadModal from './UploadModal';

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadModal, setUploadModal] = useState(false)

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
      {uploadModal && <UploadModal toggleModal={toggleModal} selectedFile={selectedFile} />}
      <input className='' type="file" onChange={handleFileInputChange} />
    </div>
  )
}

export default Upload