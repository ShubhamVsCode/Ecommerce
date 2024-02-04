import React from "react";
import ThemeMode from "@/components/core/theme-mode";
import Link from "next/link";
import Search from "./search";

const Navbar = () => {
  const links = [
    { href: "/login", label: "Login" },
    { href: "/register", label: "Register" },
  ];

  return (
    <nav className='flex justify-between items-center py-3 md:py-5 px-5 xl:px-20 border-b'>
      <Link href='/' className='text-xl font-semibold'>
        <span>Start</span>
      </Link>
      <Search />
      <div className='flex gap-5 items-center'>
        {/* {links.map(({ href, label }) => (
          <Link href={href} key={`${href}${label}`}>
            <span className='px-2 py-1'>{label}</span>
          </Link>
        ))} */}
        {/* <ThemeMode /> */}
      </div>
    </nav>
  );
};

export default Navbar;
