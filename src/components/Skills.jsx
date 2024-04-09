import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Skills() {
  const [skillsData, setSkillsData] = useState([
    {
      title: "Loading...",
      list: ["my skill"],
      id: "1",
    },
  ]);

  useEffect(() => {
    const getData = async () => {
      const skills = collection(db, "skills");
      try {
        const data = await getDocs(skills);
        const dataObject = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setSkillsData(dataObject);
      } catch (error) {
        alert(error);
      }
    };
    getData();
  }, []);

  return (
    <div
      id="skills"
      className="flex w-full flex-col items-center bg-gradient-to-t from-green-950 via-accent to-transparent px-4 py-20"
    >
      <div className="flex w-full max-w-[1280px] flex-col items-center pb-8">
        <h2 className="py-8 text-3xl font-bold">My Skills</h2>

        <div className="grid w-full justify-items-center gap-6 py-4 md:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((skill) => (
            <div
              key={skill?.id}
              className="image-shadow flex min-h-[150px] w-full flex-col items-center justify-center rounded-xl bg-white py-10"
            >
              <p className="font-semibold">{skill.title}</p>
              <ul className=" list-inside list-disc">
                {skill.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
