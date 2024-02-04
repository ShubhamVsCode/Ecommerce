import { Product } from "@/components/core/top-deals";
import { MinusCircle, PlusCircle } from "lucide-react";
import React from "react";

const CartPage = async () => {
  const response = (await fetch(
    "https://fakestoreapi.com/products?limit=10"
  ).then((res) => res.json())) as Product[];

  return (
    <div className='px-5 md:px-10 xl:px-20 mt-5'>
      <h1 className='text-2xl font-semibold'>Cart</h1>

      <div className='grid mt-10'>
        {response.map((product) => (
          <div
            key={product.id}
            className='flex hover:bg-slate-100 duration-300 transition-all ease-in-out gap-2 border-b last:border-none px-2 py-3'
          >
            <img
              src={product.image}
              alt={product.title}
              className='w-20 h-20 shrink-0 object-contain border rounded-md border-gray-200 p-2 bg-white'
            />
            <div className='flex flex-col gap-2'>
              <h2>{product.title}</h2>
              <p>₹ {product.price}</p>
              <div className='flex gap-2'>
                <button className=''>
                  <MinusCircle className='text-gray-700' />
                </button>
                <span>1</span>
                <button className=''>
                  <PlusCircle className='text-gray-700' />
                </button>

                <button className='text-sm'>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
