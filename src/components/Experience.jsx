import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

import { imgPlaceholder } from "../assets";

export default function Experience() {
  const [expData, setExpData] = useState([
    {
      company: "Loading...",
      date: "Jan 1, 2024",
      position: "My Position",
      image: imgPlaceholder,
      id: "1",
    },
  ]);

  useEffect(() => {
    const getData = async () => {
      const experience = collection(db, "experience");
      try {
        const data = await getDocs(experience);
        const dataObject = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setExpData(dataObject);
      } catch (error) {
        alert(error);
      }
    };
    getData();
  }, []);

  return (
    <div
      id="experience"
      className="z-[-1] flex w-full flex-col items-center bg-green-950 px-4 py-20"
    >
      <div className="flex w-full max-w-[640px] flex-col items-center pb-8">
        <h2 className="py-8 text-3xl font-bold text-accent">
          My Work Experiences
        </h2>
        <div className="size-8 rounded-full bg-secondary"></div>

        <div className="flex w-full flex-col items-center">
          {expData.map((xp) => (
            <div key={xp?.id} className="flex w-full flex-col items-center">
              <div className="h-20 w-1 bg-secondary"></div>
              <div className="relative flex min-h-[150px] w-full items-center justify-evenly gap-12 overflow-clip rounded-2xl py-10 text-white ring-4 ring-secondary">
                <img
                  src={xp.image}
                  className="absolute size-full object-cover object-center opacity-40"
                />
                <div className="z-10 text-center">
                  <p className="text-lg font-semibold">{xp.position}</p>
                  <p className="">{xp.company}</p>
                  <p className="text-sm">{xp.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
