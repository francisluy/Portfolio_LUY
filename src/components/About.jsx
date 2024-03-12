import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const about = collection(db, "about");
      try {
        const data = await getDocs(about);
        const dataObject = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setAboutData(dataObject[0]);
      } catch (error) {
        alert(error);
      }
    };
    getData();
  }, []);

  return (
    <div id="about" className="flex w-full flex-col items-center p-4">
      {!aboutData ? (
        <div className="flex w-full max-w-[1280px] flex-col items-center p-8 text-2xl font-bold">
          Loading...
        </div>
      ) : (
        <div className="flex w-full max-w-[1280px] flex-col items-center pb-8">
          <h2 className="py-8 text-2xl font-bold">About Me</h2>
          <div className="flex w-full flex-col items-center gap-8 py-4 lg:flex-row lg:justify-evenly">
            <img
              src={aboutData?.avatar}
              alt="profile picture"
              className="size-[200px] rounded-full"
            />
            <p className="max-w-prose text-pretty">{aboutData?.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}
