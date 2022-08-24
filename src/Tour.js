import React, { useState } from 'react';

const Tour = ({id, image, info, price, name}) => {
  return <article key={id} className='single-tour' >
    <img src={image} alt={name}  />
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price' >${price}</h4>
      </div>
      <p>{info}</p>
      <button className="delete-btn" >not intrested</button>`
    </footer>
  </article>;
};

export default Tour;
