import ListProducts from "@/components/ListProducts";

export default function Home() {
  return (
    <div className="flex h-fit w-screen items-center justify-center bg-zinc-300 py-2 text-zinc-600">
      <ListProducts />
    </div>
  );
}
