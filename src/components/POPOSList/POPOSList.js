import React from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../../sfpopos-data.json'

function POPOSList() {

  const spaces = data.map((obj, i) => {
    // Deconstruct obj into properties
    const { title, address, images, hours } = obj
  
    return (
      <div className='POPOSList'>
        <POPOSSpace
          id={i}
          name={title}
          address={address}
          image={images[0]}
          key={title}
          hours={hours}
          />
      </div>
    )
  })

  return (
    <div className="POPOSList">
      { spaces }
    </div>
  )
}

export default POPOSList