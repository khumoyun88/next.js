import React from "react"
import Link from "next/link"


export default async function page() {
    const response = await fetch("https://fakestoreapi.com/products");
    const products= await response.json();

    return(
        <div>
            <h2>Products areee:</h2>
            <ul>
                {products.map( (p) => {
                    <li key={p.id}>
                        <Link 
                        href={`/products/${p.id}`} 
                        className="text-white"
                        >{p.title}</Link>
                    </li>
                })}
            </ul>

            <h4>thats it</h4>

        </div>
    )
    
}

 