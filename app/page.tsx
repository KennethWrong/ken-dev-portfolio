import Intro from "../components/index/Intro";
import Skills from "../components/index/Skills";
import Footer from "../components/Footer";
import Timeline from "../components/index/Timeline";
import Projects from "../components/index/Projects";
import TextMarquee from "@/components/TextMarquee";

export default function Home() {
  const marqueeItems = [
    {
      text: "API endpoints",
      colour: "text-green-500",
    },
    {
      text: "•",
      colour: "text-black",
    },
    {
      text: "Distributed Systems",
      colour: "text-black",
    },
    {
      text: "•",
      colour: "text-black",
    },
    {
      text: "High Availability",
      colour: "text-red-500",
    },
    {
      text: "•",
      colour: "text-black",
    },
    {
      text: "Cloud",
      colour: "text-black",
    },
    {
      text: "•",
      colour: "text-black",
    },
    {
      text: "Microservice Architecture",
      colour: "text-green-500",
    },
    {
      text: "•",
      colour: "text-black",
    },
    {
      text: "Observability",
      colour: "text-red-500",
    },
    {
      text: "•",
      colour: "text-black",
    },
    {
      text: "Elastic Search",
      colour: "text-green-500",
    },
    {
      text: "•",
      colour: "text-black",
    },
    {
      text: "Full-Stack",
      colour: "text-black",
    },
    {
      text: "•",
      colour: "text-black",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-neutral-50 to-neutral-50">
      <Intro />
      <Timeline />
      <div className="mt-5"></div>
      <TextMarquee items={marqueeItems} font={"font-[Teko]"} />
      <div className="mt-5"></div>
      <Skills />
      <div
        id="intro"
        className="items-center bg-fixed lg:bg-cover bg-center flex-col w-full lg:justify-end justify-around bg-no-repeat h-40 bg-white mb-12 hidden md:flex"
        style={{
          backgroundImage: "url('images/intro/hk_banner3_md.png')",
        }}
      ></div>
      <Projects />
      <Footer />
    </div>
  );
}
