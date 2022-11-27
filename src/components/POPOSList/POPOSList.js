import React from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../../sfpopos-data.js'
import { useState } from 'react'

function POPOSList() {
  const [ query, setQuery ] = useState('')
  const spaces = data.filter(({ title, address }) => {
    // true if query is in title
    const inTitle = title.toLowerCase().includes(query.toLowerCase())
    // true if query is in address
    const inAddress = address.toLowerCase().includes(query.toLowerCase())
    // return true if either is true
    return inTitle || inAddress
  }).map((obj) => { 
    const { id, title, address, images, hours } = obj
  return (
    <POPOSSpace
      id={id} // use id here
      key={`${title}-${id}`} // use id here
      name={title}
      address={address}
      image={images[0]}
      hours={hours}
    />
    )
  })

  return (
    <div className="POPOSList">
			<form className='search'>
        <div>
        <input
					value={query}
          type="text"
					placeholder="Search here!"
					onChange={(e) => setQuery(e.target.value)}
				/>
        </div>
				{/* <button type="submit">Submit</button> */}
			</form>
			{spaces}
    </div>
  )
}

export default POPOSList