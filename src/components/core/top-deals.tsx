import ProductCard from "./product-card";

export interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const TopDeals = async () => {
  const response = (await fetch(
    "https://fakestoreapi.com/products?limit=5"
  ).then((res) => res.json())) as Product[];

  return (
    <div className='px-4 py-2 my-4'>
      <h1 className='text-2xl font-semibold'>Top Deals</h1>

      <div className='grid md:grid-cols-3 xl:grid-cols-5 gap-5 mt-5'>
        {response.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopDeals;
