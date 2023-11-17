"use client";
import React, { useEffect, useState } from "react";
import CartProductCard from "./CartProductCard";

export default function ListCart() {
  const [cart, setCart] = useState<any>([]);
  const api = useEffect(() => {
    fetch("http://localhost:3001/cart")
      .then((response) => response.json())
      .then((data) => {
        setCart(data);
      });
  }, []);
  return (
    <div className="grid divide-y divide-violet-500">
      {cart.map((p: any) => {
        return (
          <CartProductCard
            key={p.id}
            image={p.image}
            id={p.id}
            name={p.name}
            price={p.price}
            qtd={p.qtd}
          />
        );
      })}
    </div>
  );
}
