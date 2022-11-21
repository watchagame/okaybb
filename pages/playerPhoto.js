import React, { useState } from 'react';
import './styles.css';
import Image from 'next/image';
import { PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER } from 'next/dist/server/api-utils';

function getImageUrls(idx) {
  if (id === undefined) {
    return [];
  }
  return [
    `https://s3.us-west-2.amazonaws.com/images.playswoops.com/${idx}_no_bg_375x375.png`,
    `https://s3.us-west-2.amazonaws.com/images.playswoops.com/${idx}_no_bg_750x750.png`,
    `https://s3.us-west-2.amazonaws.com/images.playswoops.com/${idx}_no_bg_1500x1500.png`,
  ];
}

export default function App() {
  const [idx, setId] = useState();

  const imageUrls = getImageUrls(idx);
  return (
    <div className="App" key={player.id}>
      <input
        placeholder="Enter player id"
        type="number"
        value={idx}
        onChange={(e) => setId(e.target.value)}
      />
      <div className="image-container">
        {imageUrls.map((src) => (
          <Image src={src} alt="Player" />
        ))}
      </div>
    </div>
  );
}
