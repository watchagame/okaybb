import React, { useState } from 'react';
import './styles.css';

function getImageUrls(id) {
  if (id === undefined) {
    return [];
  }
  return [
    `https://s3.us-west-2.amazonaws.com/images.playswoops.com/${id}_no_bg_375x375.png`,
    `https://s3.us-west-2.amazonaws.com/images.playswoops.com/${id}_no_bg_750x750.png`,
    `https://s3.us-west-2.amazonaws.com/images.playswoops.com/${id}_no_bg_1500x1500.png`,
  ];
}

export default function App() {
  const [id, setId] = useState();

  const imageUrls = getImageUrls(id);
  return (
    <div className="App">
      <input
        placeholder="Enter player id"
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <div className="image-container">
        {imageUrls.map((src) => (
          <img src={src} alt="Player" />
        ))}
      </div>
    </div>
  );
}
