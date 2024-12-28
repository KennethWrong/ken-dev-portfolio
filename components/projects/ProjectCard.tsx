export type Project = {
  id: number;
  title: string;
  imgSrc: string;
  content: string[];
  link: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const titleStyle = "text-2xl font-bold mb-2";

  return (
    <div className=" bg-slate-200 rounded-lg p-2" key={project.id}>
      <h1 className={`${titleStyle}`}>{project.title}</h1>
      <a className="relative block bg-gray-900 group" href="##">
        <img
          className="absolute inset-0 object-cover
                            w-full h-full group-hover:opacity-20"
          src={project.imgSrc}
        />
        <div className="relative p-5">
          <div>
            <div
              className="transition-all transform
                            translate-y-8 opacity-0
                            group-hover:opacity-100
                            group-hover:translate-y-0"
            >
              <div className="p-2">
                <p className="text-lg text-white">{project.content}</p>
                <a href={project.link} target="_blank">
                  <button
                    className="px-4 py-2 text-sm mt-2
                                            text-white bg-green-600 rounded-lg"
                  >
                    View project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
