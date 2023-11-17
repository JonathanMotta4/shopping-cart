"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ListProducts() {
  const [products, setProducts] = useState<any>([]);
  const api = useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((p: any) => {
        return (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            qtd={p.qtd}
            price={p.price}
            image={p.image}
          />
        );
      })}
    </div>
  );
}

export default ListProducts;
