import CarouselBanner from "@/components/CarouselBanner";
import ExperienceProjectRow from "@/components/experience/ExperienceProjectRow";

const bannerImages = [
  "/images/experience/tiktok_2024/tt_in_bonus.png",
  "/images/experience/tiktok_2024/tt_team_bonus.jpeg",
];

export default function Page() {
  return (
    <div className="relative p-0 md:p-3 lg:p-6 items-center flex flex-col">
      <div className="absolute top-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#E81155"
            fillOpacity="1"
            d="M0,256L40,234.7C80,213,160,171,240,181.3C320,192,400,256,480,261.3C560,267,640,213,720,176C800,139,880,117,960,90.7C1040,64,1120,32,1200,32C1280,32,1360,64,1400,80L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="relative z-0 flex flex-col items-center">
        <div className="bg-black px-3 py-12 w-full font-bold flex flex-col items-center rounded-xl">
          <h1 className="text-2xl md:text-5xl text-center text-white">
            <span className="text-rose-500 font-bold">Tiktok </span>: Backend
            Engineer
          </h1>
          <h1 className="text-2xl md:text-5xl text-center mt-5 text-white">
            PGC: User Creator Product
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
              {
                'I am a backend engineer at Tiktok working under the PGC \
              organisation (Professionally Generated Content) in a subteam \
              called "User and Creator Product". Our orgs goal is to promote & \
              incentive users to create professionally generated 1 min+ videos. \
              I specifically worked on Tiktok Studio, which is a platform for \
              Tiktok Creators to manage and grow their Tiktok account.'
              }
            </p>
            <br />
            <p>
              We provide extensive tooling such as post management, comment
              management, video analytics as well as personalized inspiration
              videos. We are a horizontal team as we touch upon all stages of
              the lifecycle of a Tiktok video, from creation, management,
              deletion and appeal... Therefore cross-team collaboration is
              guaranteed in all projects.
            </p>
            <br />
            <p>
              As for tech stack, Tiktok has huge amounts of traffic so we adopt
              a microservice architecture. Hence I am familiar with most key
              components of a distributed system, such as Message Queues,
              Consul, Kubernetes, Docker etc... As for observability, we work
              with Grafana and an internal log aggregation platform similar to
              Open Telemetry
            </p>
          </div>
        </div>
        {/*Achievements */}
        <div className="flex flex-col items-center w-full lg:w-5/6 text-center text-lg md:text-3xl font-bold gap-y-10 mt-10">
          <h1>
            <span className=" text-rose-500 md:text-4xl text-2xl">1M+ </span>
            Tiktok Creators migrated to new standalone Tiktok Studio App
          </h1>
          <h1>
            <span className=" text-rose-500 md:text-4xl text-2xl">73% </span>
            {`Tiktok Studio App Downloads (785k),  75% of standalone app's DNU`}
          </h1>
          <h1>
            <span className=" text-rose-500 md:text-4xl text-2xl">113% </span>
            DAU increase to in-app Creator Studio
          </h1>
          <h1>
            <span className=" text-rose-500 md:text-4xl text-2xl">~3x </span>
            improvement on XFN information card intake
          </h1>
        </div>
        {/* Projects */}
        <div className="mt-4 lg:mt-10"></div>
        <div className="flex flex-col items-center lg:items-start w-full lg:w-5/6 text-center text-lg gap-y-10 mt-10 p-3">
          <h1 className="text-3xl font-bold lg:self-start self-center">
            Project Highlights
          </h1>
          <ExperienceProjectRow
            title={"Resource Management Platform"}
            titleBold={true}
            titleSize="text-xl"
            textSize="text-lg"
            titleCenter={false}
            textCenter={false}
            text={[
              "Led a team of 8 engineers to build a BE-driven resource management platform that reduces PM workload while standardizing team SOPs. As BE tech lead, led weekly meetings with key stakeholders, addressing project risks, project scoping, and milestone alignment.",
              "The project is split into 2 phases, the creation flow and consumption flow: Creation flow: Regards the creation of a resource, how it is stored in the database, what information it should contain. Consumption flow: How a resource is served from the data layer and presented on the application layer for users.",
            ]}
            achievements={[
              "~3x improvement on XFN information card intake",
              "Reduction of PD of each resource integration from 5PD -> 1.5PD ",
              "Accumulated 30+ XFN resource integration request since launch",
              "Open up Creator Studio resources not only for XFN RDs but to Ops/PMs with intuitive and consolidated platforms.",
              "Provide XFN integrators autonomy and complete governance over resource behaviour (i.e user frequency control, deployment region etc...)",
            ]}
            contributions={[
              "Led the entire backend design and development",
              "Led weekly syncs with RDs",
              "Carved scope and established milestones for RDs to accomplish to ensure delivery of MVP.",
              "Kept frequent communication with key stakeholders on design and hosted regular demos to capture feedback.",
              "Fully automated the rule creation/update process by utilizing 3rd party internal OpenAPI. Also wrote a syntax parser and builder for the platform's rules to modularize and improve extensibility of rule creation within the platform.",
            ]}
            images={[
              {
                imageSrc: "/images/experience/tiktok_2024/rm_platform_arch.png",
              },
            ]}
          />
          <div className="mt-0 lg:mt-10"></div>
          <ExperienceProjectRow
            title={"Tiktok Studio SDUI Resources"}
            titleBold={true}
            titleSize="text-xl"
            textSize="text-lg"
            titleCenter={false}
            textCenter={false}
            text={[
              "With the recent release of the all-in-one standalone Tiktok Studio app, our org's OKR is to grow the DAU of the app. Therefore, a project we worked on was to design and implement server driven resources within the in-app creator studio to promote the standalone app. The resources in Tiktok Studio would support multiple formats such as Pop-up and Information card.",
              "I co-designed and co-implemented the entire project with my tech lead. Throughout the project, I was responsible for the resource loading, resource context pipeline set up, and server-driven metrics. Moreover, he attended key stakeholder meetings and gave informative design feedback regarding behaviour of the information card.",
            ]}
            achievements={[
              "Contributing to 73% of app downloads (800k+ downloads) , bringing a DAU increase of 10x Q2's expectation",
              "Accounted for 75% of standalone app's DNU",
              "Accounted for 43% of content submissions",
              "Built the framework for creator studio's server-driven resource",
              "Provide XFN integrators autonomy and complete governance over resource behaviour (i.e user frequency control, deployment region etc...)",
            ]}
            contributions={[
              "Independently researched and created the initial high-level design of the pipeline through taking inspiration from other resource services and refined it with Tech-Lead.",
              "Architectured and implemented a 4-stage engine to serve server-driven promotions to promote new TikTok Creator app",
            ]}
            images={[
              {
                imageSrc: "/images/experience/tiktok_2024/sdui_resource.png",
              },
            ]}
          />
          <div className="mt-0 lg:mt-10"></div>
          <ExperienceProjectRow
            title={"Tiktok Studio Profile Page Entrance"}
            titleBold={true}
            titleSize="text-xl"
            textSize="text-lg"
            titleCenter={false}
            textCenter={false}
            text={[
              "To grow the DAU of Tiktok Studio, we decided to create a new channel for eligible Tiktok Users to enter our platform through their profile page.",
              "As easy as it may sound since everything is server driven, there was a lot of backend logic and XFN collaboration required to realize this button.",
            ]}
            achievements={[
              "Overall Creator Studio DAU +113%",
              "DAU from Profile entrance +233%",
              "Publish Activity: Publish/U +0.281%",
              "L7 Publish days +0.261%",
            ]}
            contributions={[
              "Architectured, designed and deployed 3 dorado jobs to label users via user platform's message queue",
              "Collaborated with the user platform team to create a new user feature label for users that are eligible to see the entrance on their profile page.",
              "Created 3 separate dorado insertion pipelines (initial batch insertion, daily insertion, restart job). Due to insufficient resources to run the pipelines, enlisted the help of our Datawarehouse BP to run the jobs using their resources. ",
            ]}
            images={[
              { imageSrc: "/images/experience/tiktok_2024/pfp_entrance.png" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
