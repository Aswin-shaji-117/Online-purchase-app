import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function Brand({prodBrand}) {

    const [showFullDesc, setShowFullDesc] = useState(false)

    let description = prodBrand.brandDescription

    if(!showFullDesc){
        description = description.substring(0,40) + '....';
    }

    const toggleMore = ()=>{
        setShowFullDesc(prevState => !prevState)
    }
    
  return (
    <div className="bg-indigo-100 p-6 rounded-lg shadow-md hover:bg-gray-500">
    <h2 className="text-2xl font-bold">{prodBrand.brand}</h2>
    <div className="mt-2 mb-4">
      {description}
    </div>
    <button onClick={toggleMore} className='text-red-400 mb-5 hover:text-red-600'>{showFullDesc ? 'Less' :'More'}</button>
    <div>
    <Link
      to={`/${prodBrand.brand}/${prodBrand.id}`}
      className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
    > 
      View Products
    </Link>
    </div>
  </div>
  )
}

export default Brand