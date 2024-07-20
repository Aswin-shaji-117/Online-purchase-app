import React from 'react'
import { Link } from 'react-router-dom';

function DetailsOfSingle({products}) {
    console.log(products)
  return (
    <>
    <section>
     <div className="container m-auto py-6 px-6">
        <Link
          to="/"
          className="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
          <i className="fas fa-arrow-left mr-2"></i> Back to home
        </Link>
      </div>
      </section>
      <section>
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div className="text-gray-500 mb-4">Product</div>
              <h1 className="text-3xl font-bold mb-4">
               {products.title}
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
               {/* <div className="bg-yellow-300">
                    <img src={products.image} className="object-fit: contain; h-48 w-96 ..."/>
                  </div> */}
                <i
                  className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                ></i>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-indigo-800 text-lg font-bold mb-6">
                
              </h3>

              <h3 className="text-indigo-800 text-lg font-bold mb-2">Price</h3>

              <p className="mb-4">{products.price}</p>
            </div>
          </main>

          <aside>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Brand Info</h3>
              <h4 className="text-x font-bold mb-6">Brand:
                <span className='font-italic'>{products.brand}
                  </span></h4>

              {/* <h2 className="text-2xl">{products.brandDescription}</h2> */}

              <p className="my-2">
              {products.description}              
              </p>

              <hr className="my-4" />

              <h3 className="text-xl">Contact :</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">
               {products.contact}
              </p>

              {/* <h3 className="text-xl">Contact Phone:</h3> */}

              {/* <p className="my-2 bg-indigo-100 p-2 font-bold">555-555-5555</p> */}
            </div>
            <div>
            <Link
          to="/jobs.html"
          className="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
          <i className="fas fa-arrow-left mr-2"></i> Back to Job Listings
        </Link>
        <button
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
               <Link
          to="/jobs.html"
          className="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
          <i className="fas fa-arrow-left mr-2"></i> Back to Job Listings
        </Link>
              </button>
            </div>
          </aside>
        </div>
      </div>
      </section>
    </>
  )
}

export default DetailsOfSingle;