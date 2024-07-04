import React, { useEffect, useState } from 'react';
import ProductDetails from './ProductDetails';
import SpinnerLoading from './SpinnerLoading';
import {useDispatch, useSelector} from 'react-redux'
import { setProducts } from '../features/productSlice';
function Products() {
  // const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('http://localhost:5467/Brands');
        const data = await response.json();
        // setProducts(data);
        dispatch(setProducts(data))
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  return (
    <section className="px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Featured Products
        </h2>
      </div>
      {loading ? (
        <SpinnerLoading loading={loading} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container-xl lg:container m-auto">
          {products.map((prod) => (
            <ProductDetails key={prod.id} products={prod}/>
          ))}
        </div>
      )}
    </section>
  );
}

export default Products;
