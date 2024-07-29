import Link from "next/link";
import React from "react";

export default async function Page() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return (
    <div >
      <h1 className="inline-block mb-3 text-3xl " >Products:</h1>
      <ul>
        {products.map((p) => (
          <li  key={p.id} >
            <h3 className="inline-block mr-2">{p.id}. </h3>
            <Link className="mt-2 inline-block" href={`/products/${p.id}`}>
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}