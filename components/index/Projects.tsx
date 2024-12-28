import ProjectCard from "../projects/ProjectCard";
import { Project } from "../projects/ProjectCard";

const projectList: Project[] = [
  {
    id: 6,
    title: "Parsyll",
    imgSrc: "/images/project/parsyll.png",
    content: [
      "Parsyll was our final project design to complete our degree. We utilized chatGPT's developer API to create a syllabus parsing service for students, providing then with a dashboard that holds important information regarding their classes, omitting then the hassel of going back and forth between syllabus files.",
    ],
    link: "https://github.com/KennethWrong/ParSyll",
  },
  {
    id: 5,
    title: "Trigram name generator",
    imgSrc: "/images/project/trigram.png",
    content: [
      "Following Andrej Karpathy's makemore tutorial, where we built a bigram model using both the emperical and neural model to generate names. I decided to dig further and implement a trigram model to generate names, building a one layer perceptron that would generate names based on the previous 2 letters.",
    ],
    link: "https://github.com/KennethWrong/Trigram-Name-Generator",
  },
  {
    id: 4,
    title: "Spotter",
    imgSrc: "/images/project/spotter.png",
    content: [
      "A sentimental analysis project, where the user can say anything into their microphone, and our model would do sentimental analysis on what they said and change their current spotify song to fit their mood. I opted to use a LSTM architecture instead of a pretrained transformer as I was curious to see the results.",
    ],
    link: "https://github.com/KennethWrong/Spotter",
  },
  {
    id: 3,
    title: "Merck Label Dashboard",
    imgSrc: "/images/project/qr.png",
    content: [
      "This was the dashboard that we made for Merck to help them streamline their sample labelling process, making both labelling and inventory easier. I worked as a technical lead on this project, leading and working with a team of data science and computer science students.",
    ],
    link: "https://github.com/KennethWrong/Merck-label-dashboard",
  },
  {
    id: 2,
    title: "Racacoonie",
    imgSrc: "/images/project/racacoonie.png",
    content: [
      "2023 Boilermake Hackathon Project where we created an application that allows users to choose a recipe based on the ingredients they had, dietary preferences. On top of that we use cosine similarity algorithm to recommend recipes to users based on how similar the recipes they liked are.",
    ],
    link: "https://github.com/KennethWrong/racacoonie",
  },
  {
    id: 1,
    title: "CycleGans Reimp.",
    imgSrc: "/images/project/cycleGans.png",
    content: [
      "I reimplemented the famous paper on cycle-loss GANs, training it on the artpieces of various reknown artists such as Van Gogh, Monet, Picasso, Dali etc... I also did an abalation study on the effects of different loss functions such as CrossEntropy, KL-Divergence...",
    ],
    link: "https://github.com/KennethWrong/ece50024_cycle_gans",
  },
];

function Projects() {
  return (
    <div className="relative font-inter antialiased mb-10" id={"project"}>
      <main className="relative flex flex-col justify-center overflow-hidden">
        <div className="w-full mx-auto px-5 md:px-6">
          <h1 className="font-bold text-3xl mb-5 text-center lg:text-left">
            {" "}
            Projects
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 gap-y-10 text-center">
            {projectList.map((project, id) => (
              <ProjectCard project={project} key={id} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Projects;
