"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

type TimelineItem = {
  companyName: string;
  positionName: string;
  employmentType: string;
  location: string;
  contents: string[];
  imageSrc: string;
  redirectionLink?: string;
  date: string;
};

const companyTimelineList: TimelineItem[] = [
  {
    companyName: "DoorDash",
    positionName: "Software Engineer II",
    employmentType: "Full-Time",
    location: "CA, US",
    contents: [
      "Incoming software engineer at DoorDash, working on the homepage team.",
    ],
    imageSrc: "/images/company_logo/doordashLogo.png",
    // redirectionLink: "/experiences/doordash_2024",
    date: "Feb 2025 - pres",
  },
  {
    companyName: "TikTok",
    positionName: "Software Engineer II",
    employmentType: "Full-Time",
    location: "NY, US",
    contents: [
      "Worked on the User Creation Platform team, specifically working on the creator sub-platform Tiktok Studio.",
      "Was the owner of Tiktok Studio resources, our server-driven UI features to platformize our team to other XFN teams within Tiktok as well as many other sub-modules within Tiktok Studio.",
    ],
    imageSrc: "/images/company_logo/tiktokLogo.png",
    redirectionLink: "/experiences/tiktok_2024",
    date: "JUL 2023 - FEB 2025",
  },
  {
    companyName: "Vaio",
    positionName: "Software Engineer",
    employmentType: "Contract",
    location: "Remote",
    contents: [
      "Working as a part-time contractor alongside another engineer for Vaio and Avita to revamp their website and migrate it from LAMP stack to a SPA in NextJS. Have to handle i18n content, handling traffic of users from SEA region (TW, HK, IN, SG).",
      "Initiative to switch from LAMP stack hosted on Azure to NextJS is projected to save the company $21,000 USD on hosting + maintenance fees from 3rd party vendor locking.",
    ],
    imageSrc: "/images/company_logo/vaioLogo.png",
    redirectionLink: "/experiences/vaio_2024",
    date: "JUL 2024",
  },
  {
    companyName: "Merck",
    positionName: "Software Engineer",
    employmentType: "Contract",
    location: "NJ, US",
    contents: [
      "I initally started working for Merck in Purdue's Datamine Corporate Partners program, where students get to work with mentors within the company to tackle interesting projects. We worked on solving a labelling issue within the Merck labs via a web application that has an in-house QR-Code generator and QR-Code scanning function for test sample lookup. Furthermore we designed a platform for scientists to batch upload legacy .csv files, parse them and store sample info within S3 and pipeline the files into databricks for data viz.",
      "This project was my first time experimenting with data pipelining, data cleaning and AWS services such as RedShift or S3. Learnt a lot of useful software Engineering practices and had to make a lot of engineering trade off decisions.",
    ],
    imageSrc: "/images/company_logo/merckLogo.png",
    date: "2021 - 2022",
  },
  {
    companyName: "TikTok",
    positionName: "Software Engineer",
    employmentType: "Internship",
    location: "MV, US",
    contents: [
      "I was working in the Content Creation and Consumption team within TikTok, working on features related to user contention generation. My intern project included migrating several large repositories, writing unit tests, integration tests to make sure the integration was successful.",
      'I also played around with serverless functions, async messages, queues and also the internal cloud CI/CD infrastructure. I also volunteered to work on an internal "pet project" tool in the company to keep communications active during COVID.',
    ],
    imageSrc: "/images/company_logo/tiktokLogo.png",
    date: "JUN 2021",
  },
  {
    companyName: "Purdue Agriculture",
    positionName: "Software Developer",
    employmentType: "Part-Time",
    location: "IN, US",
    contents: [
      "We were developing a web application for local farmers to monitor crop quality and yield. The frontend tech-stack we used includes Svelte, Typescript and Tailwind .",
    ],
    imageSrc: "/images/company_logo/purdueLogo.png",
    date: "OCT 2021",
  },
  {
    companyName: "Alco Holdings Inc.",
    positionName: "Web Developer",
    employmentType: "Intern",
    location: "KLN, HK",
    contents: [
      "My first tech job. Was doing frontend and backend development for a medium sized computer manufacturing company in Hong Kong. My project was to develop a website to display the CEO's conceptual Electrical Vehicle model.",
      "My job entailed daily stand-ups with marketing team, design team and the CEO himself. Unfortunately the project was discontinued due to insufficient funding.",
    ],
    imageSrc: "/images/company_logo/alcoLogo.png",
    date: "JUN 2021",
  },
  {
    companyName: "Purdue University",
    positionName: "Student",
    employmentType: "Undergraduate",
    location: "IN, US",
    contents: [
      "BSc at Purdue University with a major in Computer Engineering and a minor in Computer Networking and Information Technology (CNIT)",
    ],
    imageSrc: "/images/company_logo/purdueLogo.png",
    date: "2019-2023",
  },
];

export default function Timeline() {
  const router = useRouter();

  const div1Style =
    "flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 mb-10";
  const dateStyle =
    "sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-8 p-1 mb-3 sm:mb-0 text-gray-500 rounded-full opacity-70";

  const logoStyle = "w-28 h-28 rounded-xl mr-5 mb-5 md:mb-0";
  const headingStyle = "font-bold text-2xl";
  const subheadingStyle = "text-gray-500 text-md font-bold opacity-70 mb-2";
  const contextStyle = "text-slate-700 text-lg text-gray-700";

  const redirectionStyle = "hover:opacity-40 hover:cursor-pointer";

  const renderTimelineItem = (timelineItem: TimelineItem, index: number) => {
    return (
      <div className={`${div1Style} mb-10`} key={index}>
        <Image
          height={200}
          width={200}
          alt={`${timelineItem.companyName} logo`}
          onClick={() => {
            if (timelineItem.redirectionLink) {
              router.push(timelineItem.redirectionLink);
            }
          }}
          src={timelineItem.imageSrc}
          className={`${logoStyle} ${
            timelineItem.redirectionLink ? redirectionStyle : ""
          } transform transition-transform duration-300 hover:scale-110`}
        />
        <div className="flex flex-row">
          <div>
            <h1 className={`${headingStyle}`}>{timelineItem.companyName}</h1>
            <div className={`${subheadingStyle}`}>
              {`${timelineItem.positionName}, ${timelineItem.employmentType}, ${timelineItem.location}`}
            </div>
            <div className={`${contextStyle}`}>
              {timelineItem.contents.map((text, index) => (
                <p
                  key={index}
                  className={`${
                    index == timelineItem.contents.length - 1 ? "" : "mb-5"
                  }`}
                >
                  {text}
                </p>
              ))}
              {timelineItem.redirectionLink ? (
                <a
                  href={timelineItem.redirectionLink}
                  className="text-gray-500 hover:text-gray-400 hover:cursor-pointer underline"
                >
                  Learn more
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <time className={`${dateStyle}`}>{timelineItem.date}</time>
      </div>
    );
  };

  const listItems = () => {
    return (
      <>
        <div className="relative pl-8 sm:pl-32 py-6 group">
          {companyTimelineList.map((item, index) => {
            if (index == companyTimelineList.length - 1) {
              return "";
            } else {
              return renderTimelineItem(item, index);
            }
          })}
        </div>
        <div className="relative pl-8 sm:pl-32 py-6 group">
          {renderTimelineItem(
            companyTimelineList[companyTimelineList.length - 1],
            companyTimelineList.length - 1
          )}
        </div>
      </>
    );
  };

  return (
    <div className="relative font-inter antialiased mb-10" id={"experience"}>
      <main className="relative flex flex-col justify-center overflow-hidden">
        <div className="w-full mx-auto px-4 md:px-6">
          <h1 className="font-bold text-3xl mb-5 text-center lg:text-left">
            Experience
          </h1>
          <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-6">
            <div className="w-full max-w-3xl mx-auto">
              <div className="-my-12">{listItems()}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
