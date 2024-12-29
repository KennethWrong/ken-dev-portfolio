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
    {
      iconName: "Elastic Search",
      iconSrc: "https://cdn.worldvectorlogo.com/logos/elasticsearch.svg",
    },
    {
      iconName: "Kibana",
      iconSrc:
        "https://static-00.iconduck.com/assets.00/kibana-icon-1537x2048-476gnmfc.png",
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
    {
      iconName: "Tailwind CSS",
      iconSrc: "https://blog.paillaugue.fr/icons/TailwindCSS-Light.svg",
    },
  ];

  const toolsTechIcons: IconStruct[] = [
    {
      iconName: "VS Code",
      iconSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
    },
    {
      iconName: "Git",
      iconSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
    },
    {
      iconName: "Linux",
      iconSrc:
        "https://image.similarpng.com/very-thumbnail/2021/09/Linux-icon-design-on-transparent-background-PNG.png",
    },
    {
      iconName: "ChatGPT",
      iconSrc: "https://img.icons8.com/?size=512&id=u9JE2GppVZoD&format=png",
    },
    {
      iconName: "Postman",
      iconSrc:
        "https://user-images.githubusercontent.com/7853266/44114706-9c72dd08-9fd1-11e8-8d9d-6d9d651c75ad.png",
    },
    {
      iconName: "VIM",
      iconSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Icon-Vim.svg/2048px-Icon-Vim.svg.png",
    },
    {
      iconName: "Jenkins",
      iconSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1483px-Jenkins_logo.svg.png",
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
