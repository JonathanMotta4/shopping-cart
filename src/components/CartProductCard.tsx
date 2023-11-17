import { IconCircleX, IconXxx } from "@tabler/icons-react";
interface CartProductProps {
  id: number;
  name: string;
  price: number;
  qtd: number;
  image: string;
}
function CartProductCard({ id, image, name, price, qtd }: CartProductProps) {
  function removeFromCart() {
   
    fetch(`http://localhost:3001/cart/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  return (
    <div className="grid h-6 w-full grid-cols-5 gap-5 px-3 ">
      <span>{name}</span> <span>{qtd}</span>
      <span>R${price}</span>
      <span>Valor total:{(price * qtd).toFixed(2)}</span>
      <button
        className="flex items-center justify-center"
        onClick={removeFromCart}
      >
        <IconCircleX className=" text-violet-400 shadow-sm hover:text-violet-800" />
      </button>
    </div>
  );
}

export default CartProductCard;
