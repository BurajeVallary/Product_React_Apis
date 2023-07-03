import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './style.css';


const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/product/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProductDetails();
  }, [productId]);
  if (!product) {
    return <p> product details...</p>;
  }
  return (
    <div className='prod'>
      <h1>Product Details</h1>
      <div className='prods'>
        <img src={product.thumbnail} alt={product.title} className='images'/>
        <h2>{product.title}</h2>
        <p className="product-price"> Name: &nbsp; &nbsp; {product.brand}</p>
        <p className="product-price">Ksh:&nbsp; &nbsp;  {product.price}</p>
        <p className="product-price">&nbsp; &nbsp;{product.rating} %</p>
      </div>
    </div>
  );
};
export default ProductDetailsPage;     

//  <p className="product-price">Name: &nbsp; &nbsp;{item.title}</p>
{/* <p className="product-price"> Ksh:&nbsp; &nbsp;{item.price}</p>
<p className="product-price">{item.discountPercentage} % </p>
<Link to={`/product/${item.id}` }className="btn"> */}


