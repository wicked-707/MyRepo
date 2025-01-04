import React, { useState } from 'react';
import axios from 'axios';

const CV = () => {
    const [file, setFile] = useState(null);

    function handleUpload() {
        if (!file) {
            console.log("No file selected!");
            return;
        }

        const fd = new FormData();
        fd.append('file', file)
    }

  return (
    <div>
        <h1>Upload & Update Your Resume Here</h1>

        <input onChange={ (e) => { setFile(e.target.files[0]) }} type="file" name="file" id="file" />
        <button onClick={ handleUpload }> Upload </button>
      
    </div>
  );
};
export default CV;
