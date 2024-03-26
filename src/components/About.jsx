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
    <div id="about" className="flex w-full flex-col items-center">
      {!aboutData ? (
        <div className="flex w-full max-w-[1280px] flex-col items-center p-8 text-2xl font-bold">
          Loading...
        </div>
      ) : (
        <div className="flex w-full max-w-[1280px] flex-col items-center p-4 lg:flex-row-reverse lg:gap-12">
          <div className="space-y-4 py-8">
            <h2 className="text-center text-2xl font-bold lg:text-left">
              About Me
            </h2>
            <p className="max-w-prose text-pretty">{aboutData?.content}</p>
          </div>
          <div className="max-w-[65ch]">
            <img
              src={aboutData?.avatar}
              alt="profile picture"
              className="rounded-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
