
import React from "react";

export default async function page({params}) {
    const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const product = await response.json();
  return (
    <div>
        <h2>Product number: {params.id} </h2>
        <img className="w-60 mb-5 mt-5" src={product.image} alt="there is picture"></img>
        <h3 className="text-xl mt-2 mb-5" >{product && product.title}</h3>
        <p className="text-xs mt-5 mb-5">{product && product.description}</p>
        <h4>{product && product.price}$</h4>
        
        
    </div>
  );
}