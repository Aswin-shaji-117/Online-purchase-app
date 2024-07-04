import React from 'react'
import { Link } from 'react-router-dom';

function ProductDetails(props) {
  const {products,name} = props;
  return (
    <div className="bg-white rounded-xl shadow-md relative transition-transform duration-300 transform hover:scale-105">
    <h3 className="text-xl font-bold">{products.product}</h3>
    <div className="p-4">
    <div className="mb-5">
      {products.description}
    </div>
    <h3 className="text-indigo-500 mb-2">{products.price}</h3>
    <div className="border border-gray-100 mb-5"></div>
    <Link
      to ={`/${products.brand}/${products.id}`}
      className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
    >
      View Products
    </Link>
    </div>
  </div>
  )
}

export default ProductDetails;