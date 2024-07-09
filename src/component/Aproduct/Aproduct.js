import React from 'react';
import './Aproduct.css';

const Aproduct = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className='product-info'>
        <p className='product-name'>{name}</p>
        <p> price: ${price}</p>
        <p><small> seller:{seller}</small></p>
        <p><small> Ratings:{ratings} stars</small></p>
      </div>
      <button onClick={() => props.handalAddToCart(props.product)} className='btn-card'>
        <p>Add to card</p>
      </button>
    </div>
  );
};

export default Aproduct;