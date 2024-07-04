import React, { useEffect, useState } from 'react'
import Brand from './Brand';
import SpinnerLoading from './SpinnerLoading';
import { useDispatch, useSelector } from 'react-redux';
import { setBrand } from '../features/brandSlice';

function Bestprod() {
const dispatch = useDispatch()
const [loading, setLoading] = useState(true)
const brands = useSelector((state)=>{
  return state.brands
})
console.log(brands,"")
useEffect(()=>{
  const fetchBrand = async ()=>{
    try {
      
      const res = await fetch('http://localhost:5467/Brands');
      const data = await res.json();
      setBrand(data)
      dispatch(setBrand(data))
    } catch (error) {
      console.log('error Fetching data',error)
    }
    finally{
      setLoading(false)
    }
   
 
  }
  fetchBrand();
  
}, []);

const brand3 = brands?.slice(0,3)
  return (
<section className="py-4">
  <h1 className="mb-4 text-3xl font-bold leading-none mt-2 mb-4 text-center">Featured Brands</h1>
  <div className="container-xl lg:container m-auto">
      {loading ? <SpinnerLoading loading = {loading}/> : (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-lg">
       {brand3?.map((brand) =>
      (<Brand key={brand.id} prodBrand={brand}/>
      ))} 
     </div>
      )}
  </div>
</section>
  )
}

export default Bestprod;