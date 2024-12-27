import Intro from "../components/index/Intro";
import Skills from "../components/index/Skills";
import Footer from "../components/Footer";
import Timeline from "../components/index/Timeline";
import Projects from "../components/index/Projects";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-neutral-50 to-neutral-50">
      <Intro />
      <Timeline />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
