import CarouselBanner from "@/components/CarouselBanner";
import ExperienceProjectRow from "@/components/experience/ExperienceProjectRow";

const bannerImages = [
  "/images/experience/vaio_2024/avita_landing.png",
  "/images/experience/vaio_2024/vaio_landing.png",
];

export default function Page() {
  return (
    <div className="relative p-0 md:p-3 lg:p-6 items-center flex flex-col">
      <div className="absolute top-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFFFF"
            fill-opacity="1"
            d="M0,256L40,234.7C80,213,160,171,240,181.3C320,192,400,256,480,261.3C560,267,640,213,720,176C800,139,880,117,960,90.7C1040,64,1120,32,1200,32C1280,32,1360,64,1400,80L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="relative z-0 flex flex-col items-center">
        <div className="bg-white px-3 py-12 w-full font-bold flex flex-col items-center rounded-xl">
          <h1 className="text-2xl md:text-5xl text-center">
            VAIO : Software Engineer
          </h1>
          <h1 className="text-2xl md:text-5xl text-center mt-5">
            AVITA / VAIO
          </h1>
          {/*Carousel*/}
          <div className=" w-10/12 lg:w-4/6 h-auto flex flex-col items-center mb-10 lg:mt-10">
            <CarouselBanner images={bannerImages} />
          </div>
        </div>
        {/* About */}
        <div className="flex flex-col items-center lg:items-start lg:w-10/12 w-11/12 bg-slate-50 p-6 my-4">
          <h1 className="text-3xl font-bold mb-2">About</h1>
          <div className="text-lg">
            <p className="">
              I worked as a Software Engineer working on the frontend for VAIO
              and AVITA, both of which are computer manufacturers to migrate
              their websites from a LAMP stack, azure hosted website to a more
              cost-effective alternative as the company is sunsetting.
            </p>
            <br />
            <p>
              I previously did an internship with ALCO hence they reached out to
              me for help, since the timeline was loose and business impact was
              large, I decided to take on the job and work as a contractor /
              consultant.
            </p>
          </div>
        </div>
        {/*Achievements */}
        <div className="flex flex-col items-center w-full lg:w-5/6 text-center text-lg md:text-3xl font-bold gap-y-10 mt-10">
          <h1>
            <span className=" text-teal-800 md:text-4xl text-2xl">
              $21,000+{" "}
            </span>
            saved on maintenance fees from 3rd party vendor locking.
          </h1>
          <h1>
            <span className=" text-teal-800 md:text-4xl text-2xl">75% </span>
            decrease in page loading speed using next.js
          </h1>
          <h1>
            <span className=" text-teal-800 md:text-4xl text-2xl">
              Reliable/ Instant{" "}
            </span>
            CI/CD through Vercel for efficient & rapid development
          </h1>
        </div>
        {/* Projects */}
        <div className="mt-4 lg:mt-10"></div>
        <div className="flex flex-col items-center lg:items-start w-full lg:w-5/6 text-center text-lg gap-y-10 mt-10 p-3 lg:p-0">
          <h1 className="text-3xl font-bold lg:self-start self-center">
            Project Highlights
          </h1>
          <ExperienceProjectRow
            titleLink={"https://www.avita.com/tw"}
            title={"Avita Website"}
            titleBold={true}
            titleSize="text-xl"
            textSize="text-lg"
            titleCenter={false}
            textCenter={false}
            text={[
              "Led another Engineer to develop the website, we started by performing project scoping, identifying pages that were and were not required, hosting meetings with key stakeholders and discussing wording/ regions as Avita is sold in most SEA countries (IN, HK, SG, JP, TW, MY)",
              "We further had to handle translation work and translation routing, which is the most complicated part of the project as certain artifacts are in specific languages. Therefore we also had to reach out to the designers at Avita.",
            ]}
            achievements={[
              "Drastic improvement in page load time by migrating to a SPA",
              "Established CI/CD pipeline through vercel for ease of deployment",
              "Saved AVITA & VAIO $21,000+ on hosting/ maintenace fees from 3rd party vendor",
            ]}
            contributions={[
              "Rewrote entire website in Next.js and Typescript",
              "Migrated domain name to vercel",
              "Held meetings and demos with key stakeholders to discuss details on website and to capture user feedback.",
              "Handled i18n for entire avita website as well as i18n routing",
            ]}
            images={[
              {
                imageSrc: "/images/experience/vaio_2024/admiror.png",
              },
            ]}
          />
          <div className="mt-0 lg:mt-10"></div>
          <ExperienceProjectRow
            title={"VAIO website"}
            titleLink={"https://hk.vaio.com/en"}
            titleBold={true}
            titleSize="text-xl"
            textSize="text-lg"
            titleCenter={false}
            textCenter={false}
            text={[
              "I planned, coded and spear-headed the entire vaio website migration alone. I mainly communicated with the head of engineering, requesting for the most up-to-date information on VAIO computers, what information should be included/excluded on which specific regions.",
              "I had to rewrite over 10+ pages of plain HTML + CSS code into Next.js so that we can utilize vercel to deploy the website to reap the benefits of fast iterations and deployment times. I proposed to use vercel as I have had prior experience with it and believed that a website that showcases laptops, there is a potential for a lot of change so having a efficient CI/CD pipeline is extremely beneficial.",
            ]}
            achievements={[
              "Drastic improvement in page load time by migrating to a SPA",
              "Established CI/CD pipeline through vercel for ease of deployment",
              "Saved AVITA & VAIO $21,000+ on hosting/ maintenace fees from 3rd party vendor",
            ]}
            contributions={[
              "Rewrote entire website in Next.js and Typescript",
              "Migrated domain name to vercel",
              "Held meetings and demos with key stakeholders to discuss details on website and to capture user feedback.",
              "Handled i18n for entire avita website as well as i18n routing",
            ]}
            images={[
              {
                imageSrc: "/images/experience/vaio_2024/vaio.jpg",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
