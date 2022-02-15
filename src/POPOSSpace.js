import React from 'react';
import './POPOSSpace.css';

const POPOSSpace = ({ name, image, address}) => {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
        width="300"
        height="300"
        alt={name}
      />
      <h1>{name}</h1>
      <div>{address}</div>
    </div>
  )
}

export default POPOSSpace; 