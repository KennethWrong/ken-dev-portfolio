export default function Skills() {
  const techIcons = [
    "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg",
    "https://files.svgcdn.io/logos/fastapi.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg",
    "https://www.svgrepo.com/show/303251/mysql-logo.svg",
    "https://static-00.iconduck.com/assets.00/postgresql-plain-wordmark-icon-2048x2042-up54u54l.png",
    "https://www.svgrepo.com/show/353540/cassandra.svg",
    "https://www.svgrepo.com/show/303460/redis-logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png",
    "https://www.svgrepo.com/show/353950/kafka.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/bb/Apache_Hive_logo.svg",
    "https://www.svgrepo.com/show/331370/docker.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/3/3b/Grafana_icon.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    "https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
    "https://static-00.iconduck.com/assets.00/typescript-icon-icon-1024x1024-vh3pfez8.png",
  ];

  const renderIcon = (imageSrc: string, index: number) => {
    return (
      <div key={index} className="flex flex-col items-center">
        <img
          src={imageSrc}
          className="w-1/2 h-auto md:h-32 md:w-32 self-center"
        />
      </div>
    );
  };

  return (
    <div className="p-5 flex flex-col items-center" id={"skills"}>
      <h1 className="font-bold text-3xl mb-5 text-center lg:text-start lg:self-start">
        Skills
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-7 md:grid-cols-5 md:grid-row-3 gap-4 gap-y-4 gap-x-6 items-center justify-center">
        {techIcons.map((imageSrc, index) => renderIcon(imageSrc, index))}
      </div>
    </div>
  );
}
