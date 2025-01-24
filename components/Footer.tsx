import { FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center text-white bg-black p-6 min-h-[60vh] mt-20 md:mt-40">
      <div className="flex flex-col lg:flex-row lg:items-start mt-10">
        <div className="w-full lg:w-1/2 flex flex-col my-6 lg:my-0">
          <h1 className="text-4xl md:text-6xl mb-6">Get In Touch</h1>
          <h1 className="text-xl md:text-2xl w-8/12">
            If you are looking for a backend engineer to help develop and build
            your product or simply want to connect, feel free to send me a
            message!
          </h1>
          <div className="flex flex-row items-start gap-x-3 mt-6">
            <Link
              className="flex flex-row items-center flex-start hover:cursor-pointer hover:text-blue-300"
              href="https://www.linkedin.com/in/kenneth-wong-hon-nam/"
            >
              <FaLinkedin className="text-2xl md:text-4xl" />
            </Link>
            <Link
              className="flex flex-row items-center flex-start hover:cursor-pointer hover:text-blue-300"
              href="https://www.linkedin.com/in/christina-mbuyi/"
            >
              <FaEnvelope className="text-2xl md:text-4xl" />
            </Link>
            <Link
              className="flex flex-row items-center flex-start hover:cursor-pointer hover:text-blue-300"
              href="https://www.linkedin.com/in/christina-mbuyi/"
            >
              <FaInstagram className="text-2xl md:text-4xl" />
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col mb-20 items-center justify-center hover:cursor-pointer">
          <Link
            className="flex flex-col items-center justify-center border-2 border-white w-6/12 h-225 font-bold rounded-lg transform transition-transform duration-300 hover:scale-110"
            href="/blogs"
          >
            <p className="text-lg text-white">Check out my blog</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
