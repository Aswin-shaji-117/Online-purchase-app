import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom';
import SpinnerLoading from './SpinnerLoading';

function SingleProductDetails() {
    const [loading, setLoading] = useState(true);
    const [product,setProduct] = useState(true);
    const {id} = useParams();
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`http://localhost:5467/Brands/${id}`);
          const data = await response.json();
          setProduct(data);
          console.log(data);
        } catch (error) {
          console.log('Error fetching data', error);
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }, []);
  return (
    <>
     <NavBar/>
     {
        loading ?<SpinnerLoading/>:(
            <>
             <section className="bg-indigo-50">
            <div class="container m-auto py-10 px-6">
        <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div class="text-gray-500 mb-4">Full-Time</div>
              <h1 class="text-3xl font-bold mb-4">
                Senior React Developer
              </h1>
              <div
                class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <i
                  class="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                ></i>
                <p class="text-orange-700">Boston, MA</p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-indigo-800 text-lg font-bold mb-6">
                Job Description
              </h3>

              <p class="mb-4">
               We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular.
              </p>

              <h3 class="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

              <p class="mb-4">$70k - $80K / Year</p>
            </div>
          </main>

          <aside>
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-6">Company Info</h3>

              <h2 class="text-2xl">NewTek Solutions</h2>

              <p class="my-2">
                NewTek Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.
              </p>

              <hr class="my-4" />

              <h3 class="text-xl">Contact Email:</h3>

              <p class="my-2 bg-indigo-100 p-2 font-bold">
                contact@newteksolutions.com
              </p>

              <h3 class="text-xl">Contact Phone:</h3>

              <p class="my-2 bg-indigo-100 p-2 font-bold">555-555-5555</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-xl font-bold mb-6">Manage Job</h3>
              <a
                href="/add-job.html"
                class="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Job</a
              >
              <button
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
            </>
            )
     }
    </>
   
  )
}

export default SingleProductDetails