type IconStruct = {
  iconSrc: string;
  iconName: string;
};

export default function Skills() {
  const backendTechIcons: IconStruct[] = [
    {
      iconName: "GO",
      iconSrc:
        "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
    },
    {
      iconName: "Python",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
    },
    {
      iconName: "MongoDB",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg",
    },
    {
      iconName: "NodeJS",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg",
    },
    {
      iconName: "Flask",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg",
    },
    {
      iconName: "Fast API",
      iconSrc: "https://files.svgcdn.io/logos/fastapi.png",
    },
    {
      iconName: "MySQL",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg",
    },
    {
      iconName: "MySQL",
      iconSrc: "https://www.svgrepo.com/show/303251/mysql-logo.svg",
    },
    {
      iconName: "PostGresSQL",
      iconSrc:
        "https://static-00.iconduck.com/assets.00/postgresql-plain-wordmark-icon-2048x2042-up54u54l.png",
    },
    {
      iconName: "Cassandra",
      iconSrc: "https://www.svgrepo.com/show/353540/cassandra.svg",
    },
    {
      iconName: "Redis",
      iconSrc: "https://www.svgrepo.com/show/303460/redis-logo.svg",
    },
    {
      iconName: "AWS",
      iconSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png",
    },
    {
      iconName: "Kafka",
      iconSrc: "https://www.svgrepo.com/show/353950/kafka.svg",
    },
    {
      iconName: "Apache Hive",
      iconSrc:
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/Apache_Hive_logo.svg",
    },
    {
      iconName: "Docker",
      iconSrc: "https://www.svgrepo.com/show/331370/docker.svg",
    },
    {
      iconName: "Kubernetes",
      iconSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png",
    },
    {
      iconName: "Grafana",
      iconSrc:
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/Grafana_icon.svg",
    },
  ];

  const frontendTechIcons: IconStruct[] = [
    {
      iconName: "React",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    },
    {
      iconName: "Next JS",
      iconSrc:
        "https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png",
    },
    {
      iconName: "Javascript",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
    },
    {
      iconName: "Typescript",
      iconSrc:
        "https://static-00.iconduck.com/assets.00/typescript-icon-icon-1024x1024-vh3pfez8.png",
    },
  ];

  const toolsTechIcons: IconStruct[] = [
    {
      iconName: "VS Code",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    },
    {
      iconName: "Git",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    },
    {
      iconName: "Linux",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    },
    {
      iconName: "ChatGPT",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    },
  ];

  const renderIcon = (icon: IconStruct, index: number) => {
    return (
      <div
        className="flex flex-row items-center justify-start bg-slate-50 border-2 w-full h-full rounded-md"
        key={index}
      >
        <div key={index} className="flex flex-col items-center p-4">
          <img src={icon.iconSrc} className="h-auto w-10 self-center" />
        </div>
        <p className="font-bold">{icon.iconName}</p>
      </div>
    );
  };

  return (
    <div className="p-5 flex flex-col w-full mb-10" id={"skills"}>
      <h1 className="font-bold text-3xl mb-5 text-center lg:text-start lg:self-start">
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
    </div>
  );
}
