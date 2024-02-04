import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";

const Banner = () => {
  return (
    <div className='md:mx-16'>
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <Image
              src='https://marketplace.canva.com/EAFuUVuQu98/1/0/1600w/canva-yellow-pink-bold-fashion-sale-landscape-banner-XgQnSpGbsnQ.jpg'
              alt='Banner 1'
              width={1000}
              height={400}
              className='w-full h-[400px] object-cover'
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src='https://marketplace.canva.com/EAFcbovBUsc/1/0/1600w/canva-red-and-white-modern-spring-fashion-sale-banner-landscape-S0Qi8jzszTk.jpg'
              alt='Banner 1'
              width={1000}
              height={400}
              className='w-full h-[400px] object-cover'
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src='https://marketplace.canva.com/EAFuUVuQu98/1/0/1600w/canva-yellow-pink-bold-fashion-sale-landscape-banner-XgQnSpGbsnQ.jpg'
              alt='Banner 1'
              width={1000}
              height={400}
              className='w-full h-[400px] object-cover'
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className='hidden md:flex' />
        <CarouselNext className='hidden md:flex' />
      </Carousel>
    </div>
  );
};

export default Banner;
