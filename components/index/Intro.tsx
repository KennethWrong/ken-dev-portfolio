"use client";
import { useState } from "react";
import Image from "next/image";

function Intro() {
  const attributeStyle = "mt-3 md:text-xl text-center text-md";
  const logoStyle = "w-12 h-12 ml-4";
  const subtextStyle = "text-gray-400";
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div
      id="intro"
      className="flex items-center bg-fixed lg:bg-cover bg-center flex-col w-full lg:justify-end justify-around bg-no-repeat h-100vh bg-white mb-12 pt-20 lg:pt-0"
      style={{
        backgroundImage: "url('images/intro/hk_banner3_md.png')",
      }}
    >
      <div className="p-3 bg-stone-50 rounded-md border-2 mb-10 animate-slideUp transform transition-transform duration-300 hover:scale-105a">
        <div className="md:flex md:flex-col lg:justify-around align-middle p-2 items-center mb-12">
          <div className="flex flex-col items-center">
            <Image
              height={4284}
              width={5712}
              className="object-cover w-96 h-96 m-2 p-2 rounded-full"
              src="/images/face.png"
              alt="Profile image"
            />
            <a href="/files/Kenneth_resume.pdf" download="kenneth_wong_resume">
              <h1
                className={`${subtextStyle} text-center mt-2 hover:text-purple-600 hover:cursor-pointer font-bold`}
              >
                Download my Resume
              </h1>
            </a>
          </div>
          <div className="max-w-2xl md:text-lg md:ml-4 text-md text-gray-700 dark:text-gray-200 mt-3 font-bold flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl text-center">
              {" "}
              Kenneth Wong Hon Nam
            </h1>
            <p className={`${attributeStyle} ${subtextStyle} w-3/4`}>
              {
                "A backend engineer who's currently training his biological neural net 🧠🤖"
              }
            </p>
            <div className="flex flex-row justify-center mt-2 mb-2">
              <a href="https://github.com/KennethWrong">
                <Image
                  height={200}
                  width={200}
                  alt="github logo"
                  src="/images/intro/githubLogo.png"
                  className={`${logoStyle}`}
                />
              </a>
              <a href="https://www.linkedin.com/in/kenneth-wong-hon-nam/">
                <Image
                  height={200}
                  width={200}
                  alt="linkedin logo"
                  src="/images/linkedinLogo.png"
                  className={`${logoStyle}`}
                />
              </a>
              <a
                onClick={() => setShowEmail(!showEmail)}
                className="cursor-pointer"
              >
                <Image
                  height={200}
                  width={200}
                  alt="email logo"
                  src="/images/emailLogo.png"
                  className={`${logoStyle}`}
                />
              </a>
              <a href="https://www.instagram.com/werunm.env/?hl=en">
                <Image
                  height={200}
                  width={200}
                  alt="instagram logo"
                  src="/images/instagramLogo.png"
                  className={`${logoStyle}`}
                />
              </a>
            </div>
            <p
              className={`${attributeStyle} ${subtextStyle} ${
                !showEmail ? "invisible" : ""
              }
                        text-blue-600 hover:text-purple-600 hover:cursor-pointer`}
              onClick={() =>
                (window.location.href = "mailto:cankennethwong@gmail.com")
              }
            >
              {" "}
              cankennethwong [AT] gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
