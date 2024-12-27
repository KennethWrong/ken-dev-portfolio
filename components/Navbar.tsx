import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-col items-center text-center md:items-start p-3 text-gray-500">
      <Link href="/">
        <h1 className="md:text-sm text-xs">{`< Back To Portfolio`}</h1>
      </Link>
    </div>
  );
}
