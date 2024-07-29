import Link from "next/link";
import React from "react";

export default async function Page() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return (
    <div >
      <ul>
        {products.map((p) => (
          <li key={p.id} >
            <Link
              
              href={`/products/${p.id}`}
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}