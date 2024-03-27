import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { cn } from "../lib/utils";
import { LuPhoneCall } from "react-icons/lu";

export default function Hero() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const hero = collection(db, "hero");
      try {
        const data = await getDocs(hero);
        const dataObject = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setHeroData(dataObject[0]);
      } catch (error) {
        alert(error);
      }
    };

    getData();
  }, []);

  return (
    <div className="flex h-[90vh] w-full items-center justify-center bg-gradient-to-b from-green-950 via-green-800 to-amber-50">
      {!heroData ? (
        <div className="flex size-full items-center justify-center text-6xl font-semibold text-secondary">
          Loading...
        </div>
      ) : (
        <>
          <img
            src={heroData?.background}
            alt="background image"
            className={cn(
              "absolute size-full object-cover object-bottom",
              heroData?.blur ? "blur-lg" : null,
            )}
          />
          <div className="fixed flex w-full max-w-[1680px] flex-col items-center justify-center px-4 lg:flex-row lg:justify-center lg:gap-12">
            <div className="size-[300px] overflow-clip rounded-full border-8 border-secondary backdrop-blur-xl">
              <img
                src={heroData?.image}
                alt="hero image"
                className="object-cover"
              />
            </div>

            <div className="font-semibold text-accent md:space-y-4">
              <p className="text-3xl md:text-5xl">Hello,</p>
              <p className="text-4xl md:text-6xl">
                I&apos;m{" "}
                <span className="text-secondary">{heroData?.name}</span>
              </p>
              <p className="text-lg font-medium md:text-2xl">
                {heroData?.title}
              </p>
              <div className="flex w-full items-center justify-center lg:justify-start">
                <a
                  className="image-shadow mt-4 flex w-40 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-center font-normal text-secondary"
                  href="#contact"
                >
                  <LuPhoneCall />
                  <span>Contact Me</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
