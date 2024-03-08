import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { cn } from "../lib/utils";
import { db } from "../config/firebase";
import { imgPlaceholder } from "../assets";

const defaultProjects = [
  {
    title: "My Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, numquam.",
    image: imgPlaceholder,
  },
];

export default function Projects() {
  const [projectsData, setProjectsData] = useState(defaultProjects);

  useEffect(() => {
    const getData = async () => {
      const projects = collection(db, "projects");
      try {
        const data = await getDocs(projects);
        const dataObject = data.docs.map((doc) => ({ ...doc.data() }));
        setProjectsData(dataObject);
      } catch (error) {
        alert(error);
      }
    };
    getData();
  }, []);

  return (
    <div id="projects" className="my-8 flex w-full flex-col items-center p-4">
      <div className="flex w-full max-w-[1280px] flex-col items-center gap-16 pb-8">
        <h2 className="text-2xl font-bold">My Projects</h2>
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={cn(
              "flex w-full flex-col items-center gap-8 py-4 lg:items-start lg:justify-evenly lg:gap-16",
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse",
            )}
          >
            <img
              src={project.image}
              alt="project picture"
              className="image-shadow w-full rounded-xl object-cover shadow-2xl lg:w-3/6"
            />
            <div className="w-full space-y-4">
              <div>
                <p className="font-semibold">{project.title}</p>
                <p className="text-sm">{project.date}</p>
              </div>
              <p className="max-w-prose text-pretty indent-8">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
