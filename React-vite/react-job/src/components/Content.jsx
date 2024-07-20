import React from 'react'

function Content() {
  const user = localStorage.getItem('user')
  return (
    <section className="bg-green-700 py-20 mb-3">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-2xl font-extrabold text-white sm:text-2xl md:text-4xl"
          >
            Be Smart in Shopping
          </h1>
          <p className="my-4 text-l text-white">
            Find the Best Product that fits to you
          </p>
        </div>
      </div>
    </section>
  )
}

export default Content;
