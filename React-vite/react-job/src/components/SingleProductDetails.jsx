import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';
import SpinnerLoading from './SpinnerLoading';
import DetailsOfSingle from './DetailsOfSingle';

function SingleProductDetails() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5467/Products/${id}`);
        const data = await response.json();
        setProduct(data);
        console.log("Product data:", data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <>
      <NavBar />
      {loading ? (
        <SpinnerLoading />
      ) : (

          <DetailsOfSingle key = {id} products={product} />
      )}
    </>
  );
}

export default SingleProductDetails;
