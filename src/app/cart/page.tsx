import ListCart from "@/components/ListCart";

export default function CartPage() {
  return (
    <div className="flex h-screen w-screen justify-center bg-zinc-300 py-2 ">
      <div className="flex h-fit flex-col overflow-hidden  rounded-lg bg-zinc-200 text-zinc-700 sm:w-fit md:w-fit">
        <ListCart />
        <div className="w-full  border border-t-violet-600 bg-violet-400 text-zinc-900">
          price
        </div>
      </div>
    </div>
  );
}
