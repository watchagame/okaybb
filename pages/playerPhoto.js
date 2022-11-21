import React, { useState } from 'react';
import './styles.css';
import Image from 'next/image';

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
        key={id}
        onChange={(e) => setId(e.target.key)}
      />
      <div className="image-container">
        {imageUrls.map((src) => (
          <Image src={src} alt="Player" />
        ))}
      </div>
    </div>
  );
}
