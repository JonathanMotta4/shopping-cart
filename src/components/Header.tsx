import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between border border-b-violet-600 bg-zinc-100 px-5 py-2 text-zinc-900">
      <Link href={"/"}>
        <h1 className="hover:font-semibold hover:text-violet-600">
          Shopping Cart
        </h1>
      </Link>
      <nav>
        <ul className="flex gap-5">
          <li className="hover:font-semibold hover:text-violet-600">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:font-semibold hover:text-violet-600">
            <Link href={"/cart"}>Cart</Link>
          </li>
          <li className="hover:font-semibold hover:text-violet-600">
            <Link href={"/"}>Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
