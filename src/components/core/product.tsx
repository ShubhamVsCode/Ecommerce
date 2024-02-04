import { Button } from "@/components/ui/button";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
  ShoppingCart,
  StarIcon,
} from "lucide-react";
import { Product as ProductType } from "./top-deals";

export default async function Product({ productId }: { productId: string }) {
  const response = (await fetch(
    "https://fakestoreapi.com/products/" + productId
  ).then((res) => res.json())) as ProductType;

  const { id, title, description, category, price, image, rating } = response;

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <div className='relative'>
            <img
              alt="Men's Grey Tracksuit"
              className='w-full h-auto'
              height='450'
              src={image}
              style={{
                aspectRatio: "450/450",
                objectFit: "contain",
              }}
              width='450'
            />
            <div className='absolute top-1/2 left-0 transform -translate-y-1/2 space-x-2'>
              <Button variant='ghost'>
                <ChevronLeftIcon className='text-gray-700' />
              </Button>
              <Button variant='ghost'>
                <ChevronRightIcon className='text-gray-700' />
              </Button>
            </div>
          </div>
          <div className='flex space-x-4 mt-4'>
            <img
              alt="Men's Grey Tracksuit Front"
              className='w-24 h-24'
              height='100'
              src='/placeholder.svg'
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width='100'
            />
            <img
              alt="Men's Grey Tracksuit Side"
              className='w-24 h-24'
              height='100'
              src='/placeholder.svg'
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width='100'
            />
            <img
              alt="Men's Grey Tracksuit Back"
              className='w-24 h-24'
              height='100'
              src='/placeholder.svg'
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width='100'
            />
          </div>
        </div>
        <div>
          <h1 className='text-2xl font-bold'>{title}</h1>
          <p className='text-sm text-gray-500 mt-1'>{description}</p>
          <p className='text-4xl font-semibold mt-4'>Rs. {price}</p>
          <div className='flex items-center space-x-2 mt-4'>
            <Button variant='outline'>XS</Button>
            <Button variant='outline'>S</Button>
            <Button variant='outline'>M</Button>
            <Button variant='outline'>L</Button>
            <Button variant='outline'>XL</Button>
            <Button variant='outline'>2XL</Button>
            <Button variant='outline'>3XL</Button>
          </div>
          <div className='flex items-center space-x-2 mt-4'>
            <Button className='bg-[#35495e] w-6 h-6 rounded-full' />
            <Button className='bg-[#2c3e50] w-6 h-6 rounded-full' />
            <Button className='bg-[#ecf0f1] w-6 h-6 rounded-full' />
          </div>
          <div className='flex items-center space-x-4 mt-4'>
            <Button variant='outline'>-</Button>
            <p>1</p>
            <Button variant='outline'>+</Button>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <div className='flex items-center gap-3'>
              <Button variant={"secondary"}>
                <ShoppingCart className='w-5 h-5 mr-2' /> Add to Cart
              </Button>
              <Button variant={"default"} className='px-10'>
                Buy Now
              </Button>
            </div>
            <Button variant='ghost'>
              <HeartIcon className='text-gray-700' />
            </Button>
          </div>
          <div className='flex items-center space-x-2 mt-4'>
            <div className='flex items-center'>
              <StarIcon className='text-yellow-400' />
              <StarIcon className='text-yellow-400' />
              <StarIcon className='text-yellow-400' />
              <StarIcon className='text-yellow-400' />
              <StarIcon className='text-gray-300' />
            </div>
            <p className='text-sm text-gray-500'>296 reviews</p>
            <Button variant='ghost'>
              <ChevronRightIcon className='text-gray-700' />
            </Button>
          </div>
          <div className='mt-4'>
            <Button className='w-full justify-between' variant='ghost'>
              Product details
              <ChevronDownIcon className='text-gray-700' />
            </Button>
            <Button className='w-full justify-between' variant='ghost'>
              Composition and care
              <ChevronDownIcon className='text-gray-700' />
            </Button>
            <Button className='w-full justify-between' variant='ghost'>
              Delivery and payment
              <ChevronDownIcon className='text-gray-700' />
            </Button>
            <Button className='w-full justify-between' variant='ghost'>
              Returns and exchanges
              <ChevronDownIcon className='text-gray-700' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
