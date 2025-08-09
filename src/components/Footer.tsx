import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">Marco's Pizza</Link>
      <p>© ALL RIGHTS RESERVED. Ahmed Kamel 2025</p>
    </div>
  );
};

export default Footer;
