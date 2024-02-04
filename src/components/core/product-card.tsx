import React from "react";
import { Product } from "./top-deals";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className='flex group flex-col items-center justify-center space-y-2 border px-4 py-2 shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer'>
      <Link href={`product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className='w-full h-[250px] object-contain group-hover:scale-105 transition duration-300 ease-in-out rounded-md'
        />
      </Link>
      <h2 className='line-clamp-1'>{product.title}</h2>

      <p className='text-sm'>₹ {product.price}</p>
      <div className='flex items-center justify-between w-full'>
        <Button variant={"secondary"}>
          <ShoppingCart className='w-5 h-5' />
        </Button>
        <Button variant={"default"} className='px-10'>
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
