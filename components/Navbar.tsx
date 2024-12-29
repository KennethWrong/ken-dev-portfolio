"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between text-center px-6 py-3 text-black font-bold fixed top-0 z-30 w-full bg-white text-xs md:text-lg lg:text-xl">
      <Link href="/#intro">
        <h1 className="">{`Intro`}</h1>
      </Link>
      <Link href="/#experience">
        <h1 className="">{`Experience`}</h1>
      </Link>
      <Link href="/#skills">
        <h1 className="">{`Skills`}</h1>
      </Link>
      <Link href="/#project">
        <h1 className="">{`Project`}</h1>
      </Link>
    </div>
  );
}
