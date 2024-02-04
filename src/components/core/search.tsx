"use client";
import { useState } from "react";
import { SearchIcon } from "lucide-react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className='border hidden md:flex border-gray-300 px-2 py-1 rounded-lg xl:flex-1 transition duration-300 ease-in-out mx-20 items-center'>
      <SearchIcon className='w-5 h-5 text-gray-500' />
      <input
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='Search Products...'
        className='w-full bg-transparent focus:outline-none focus:ring-0 border-none px-2 py-1 rounded-lg transition duration-300 ease-in-out'
      />
    </div>
  );
};

export default Search;
