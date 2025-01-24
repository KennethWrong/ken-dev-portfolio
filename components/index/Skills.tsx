import Image from "next/image";

type IconStruct = {
  iconSrc: string;
  iconName: string;
};

export default function Skills() {
  const backendTechIcons: IconStruct[] = [
    {
      iconName: "GO",
      iconSrc: "/images/skills/goLogo.svg",
    },
    {
      iconName: "Python",
      iconSrc: "/images/skills/pythonLogo.svg",
    },
    {
      iconName: "MongoDB",
      iconSrc: "/images/skills/mongodbLogo.svg",
    },
    {
      iconName: "NodeJS",
      iconSrc: "/images/skills/nodejsLogo.svg",
    },
    {
      iconName: "Flask",
      iconSrc: "/images/skills/flaskLogo.svg",
    },
    {
      iconName: "Fast API",
      iconSrc: "/images/skills/fastapiLogo.png",
    },
    {
      iconName: "MySQL",
      iconSrc: "/images/skills/mysqlLogo.svg",
    },
    {
      iconName: "PostGresSQL",
      iconSrc: "/images/skills/postgresLogo.png",
    },
    {
      iconName: "Cassandra",
      iconSrc: "/images/skills/cassandraLogo.svg",
    },
    {
      iconName: "Redis",
      iconSrc: "/images/skills/redisLogo.svg",
    },
    {
      iconName: "AWS",
      iconSrc: "/images/skills/awsLogo.png",
    },
    {
      iconName: "Kafka",
      iconSrc: "/images/skills/kafkaLogo.svg",
    },
    {
      iconName: "Apache Hive",
      iconSrc: "/images/skills/hiveLogo.svg",
    },
    {
      iconName: "Docker",
      iconSrc: "/images/skills/dockerLogo.svg",
    },
    {
      iconName: "Kubernetes",
      iconSrc: "/images/skills/kubernetesLogo.png",
    },
    {
      iconName: "Grafana",
      iconSrc: "/images/skills/grafanaLogo.svg",
    },
    {
      iconName: "Elastic Search",
      iconSrc: "/images/skills/esLogo.svg",
    },
    {
      iconName: "Kibana",
      iconSrc: "/images/skills/kibanaLogo.png",
    },
  ];

  const frontendTechIcons: IconStruct[] = [
    {
      iconName: "React",
      iconSrc: "/images/skills/reactLogo.svg",
    },
    {
      iconName: "Next JS",
      iconSrc: "/images/skills/nextjsLogo.png",
    },
    {
      iconName: "Javascript",
      iconSrc: "/images/skills/jsLogo.svg",
    },
    {
      iconName: "Typescript",
      iconSrc: "/images/skills/tsLogo.png",
    },
    {
      iconName: "Tailwind CSS",
      iconSrc: "/images/skills/tailwindLogo.svg",
    },
  ];

  const toolsTechIcons: IconStruct[] = [
    {
      iconName: "VS Code",
      iconSrc: "/images/skills/vscodeLogo.png",
    },
    {
      iconName: "Git",
      iconSrc: "/images/skills/gitLogo.png",
    },
    {
      iconName: "Linux",
      iconSrc: "/images/skills/linuxLogo.png",
    },
    {
      iconName: "ChatGPT",
      iconSrc: "/images/skills/gptLogo.png",
    },
    {
      iconName: "Postman",
      iconSrc: "/images/skills/postmanLogo.png",
    },
    {
      iconName: "VIM",
      iconSrc: "/images/skills/vimLogo.png",
    },
    {
      iconName: "Jenkins",
      iconSrc: "/images/skills/jenkinsLogo.png",
    },
  ];

  const renderIcon = (icon: IconStruct, index: number) => {
    return (
      <div
        className="flex flex-row items-center justify-start bg-slate-50 border-2 w-full h-full rounded-md transform transition-transform duration-300 hover:scale-105"
        key={index}
      >
        <div key={index} className="flex flex-col items-center p-4">
          <Image
            height={200}
            width={200}
            alt={`${icon.iconName} icon`}
            src={icon.iconSrc}
            className="h-auto w-10 self-center"
          />
        </div>
        <p className="font-bold">{icon.iconName}</p>
      </div>
    );
  };

  return (
    <div className="p-5 flex flex-col w-full mb-10">
      <h1 className="font-bold text-3xl mb-7 text-center lg:text-start lg:self-start">
        Technologies
      </h1>
      <div>
        <h1 className="font-bold text-xl mb-4 text-center lg:text-start">
          Backend
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-y-4 gap-x-2 items-center justify-evenly w-full">
          {backendTechIcons.map((icon, index) => renderIcon(icon, index))}
        </div>
      </div>
      <div className="mt-10">
        <h1 className="font-bold text-xl mb-4 text-center lg:text-start">
          Frontend
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 gap-y-4 gap-x-2 items-center justify-evenly w-full">
          {frontendTechIcons.map((icon, index) => renderIcon(icon, index))}
        </div>
      </div>
      <div className="mt-10">
        <h1 className="font-bold text-xl mb-4 text-center lg:text-start">
          Tools
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 gap-y-4 gap-x-2 items-center justify-evenly w-full">
          {toolsTechIcons.map((icon, index) => renderIcon(icon, index))}
        </div>
      </div>
    </div>
  );
}
