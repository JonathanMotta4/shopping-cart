import { IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";
interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  qtd: number;
  image: string;
}
function ProductCard({ id, image, name, price, qtd }: ProductCardProps) {
  function addToCart() {
    let _data = {
      id,
      name,
      image,
      price,
      qtd,
    };
    fetch("http://localhost:3001/cart", {
      method: "POST",
      body: JSON.stringify(_data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  
  return (
    <div className="flex min-h-fit w-64 flex-col  items-center justify-center gap-3 rounded-lg bg-zinc-500 py-5 text-center text-zinc-800">
      <Image
        src={image}
        alt="Product Image"
        height={250}
        width={200}
        className="rounded-lg"
      ></Image>
      <div className="flex flex-col items-center gap-1 text-center text-xl">
        <span>{name}</span>
        <span>R${price}</span>
        <button className="flex w-36 items-center justify-around gap-2 rounded-lg bg-violet-600 px-4 py-2 text-zinc-200 shadow-sm hover:bg-violet-800" onClick={addToCart}>
          Comprar <IconShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
