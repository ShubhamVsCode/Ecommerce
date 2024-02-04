import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const TopDeals = async () => {
  const response = (await fetch(
    "https://fakestoreapi.com/products?limit=5"
  ).then((res) => res.json())) as {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
  }[];

  return (
    <div className='px-4 py-2 my-4'>
      <h1 className='text-2xl font-semibold'>Top Deals</h1>

      <div className='grid md:grid-cols-3 xl:grid-cols-5 gap-5 mt-5'>
        {response.map((product) => (
          <div
            key={product.id}
            className='flex flex-col items-center justify-center space-y-2 border px-4 py-2 shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer'
          >
            <img
              src={product.image}
              alt={product.title}
              className='w-full h-[250px] object-contain'
            />
            <h2 className='line-clamp-1'>{product.title}</h2>

            <p className='text-sm'>₹ {product.price}</p>
            <div className='flex items-center justify-between w-full'>
              <Button variant={"secondary"}>
                <ShoppingCart className='w-5 h-5' />
              </Button>
              <Button variant={"default"}>Buy Now</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeals;
