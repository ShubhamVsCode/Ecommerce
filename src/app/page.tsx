import Banner from "@/components/core/banner";
import CategoryHeader from "@/components/core/category-header";
import TopDeals from "@/components/core/top-deals";

export default function Home() {
  return (
    <main className='px-2 xl:px-20 my-3'>
      {/* <CategoryHeader /> */}
      <Banner />
      <TopDeals />
    </main>
  );
}
