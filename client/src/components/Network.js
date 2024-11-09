// Network.js
import '../Network.css';
import React, { useEffect, useState } from 'react';
import { postData } from '../utils/api';
import { fetchData } from '../utils/api';


function Network() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [networkData, setNetworkData] = useState([]); // This will store network-related content

  // Function to handle file input changes
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Function to handle file upload
  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      // Send the file to the backend API for uploading
      const response = await postData('/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      // Update the image URL state with the uploaded file path
      setImageUrl(response.filePath);
      alert('Image uploaded successfully');
    } catch (err) {
      console.error('Upload failed:', err);
    }
  };

  // Function to fetch network-related data (e.g., posts)
  useEffect(() => {
    const fetchNetworkData = async () => {
      try {
        const data = await fetchData('/api/network');
        setNetworkData(data);
      } catch (err) {
        console.error('Failed to fetch network data:', err);
      }
    };
    fetchNetworkData();
  }, []);


  return (
    <div className="network">
      <h2>Network</h2>
      <div className="upload-section">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload Image</button>
      </div>
      {imageUrl && <img src={imageUrl} alt="Uploaded" className="uploaded-image" />}
      <div className="network-content">
        {networkData.map((item, index) => (
          <div key={index} className="network-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.imageUrl && <img src={item.imageUrl} alt="Network content" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Network;
