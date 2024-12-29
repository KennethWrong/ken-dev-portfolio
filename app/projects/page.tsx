import { ProjectList } from "@/components/index/Projects";
import TextImageRow from "@/components/TextImageRow";

export default function Page() {
  return (
    <div className="flex flex-col items-center pt-20">
      <main className="relative flex flex-col justify-center overflow-hidden items-center">
        <div className="w-full mx-auto px-5 md:px-6 flex flex-col items-center">
          <h1 className="font-bold text-6xl text-center lg:text-left lg:self-start justify-center">
            Projects
          </h1>
          <div className="flex flex-col items-center">
            {ProjectList.map((project, id) => {
              return (
                <TextImageRow
                  key={id}
                  title={project.title}
                  titleLink={project.link}
                  images={[{ imageSrc: project.imgSrc }]}
                  text={project.content}
                  textCenter={false}
                  titleCenter={false}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
