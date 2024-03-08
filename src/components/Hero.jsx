import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

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
    <div className="relative z-[-1] flex h-[85vh] w-full items-end justify-center  bg-gradient-to-r from-green-200 to-amber-50">
      {!heroData ? (
        <div className="flex size-full items-center justify-center text-6xl font-semibold text-green-950">
          Loading...
        </div>
      ) : (
        <>
          <img
            src={heroData?.background}
            alt=""
            className="absolute size-full object-cover object-bottom blur-xl"
          />
          <div className="fixed flex h-[85vh] w-full max-w-[1680px] flex-col items-center px-4  lg:flex-row lg:justify-center">
            <div className="z-[1] flex h-1/2 max-w-[600px] flex-col justify-center pt-20 text-6xl font-semibold text-[#EDE9A3] lg:h-full lg:max-w-full lg:text-8xl">
              <p className="">Hello,</p>
              <span className="py-1 pb-4 lg:pb-8">
                I&apos;m{" "}
                <span className="text-[#9bfb93]">{heroData?.name}</span>
              </span>
              <span className="text-lg">{heroData?.title}</span>
            </div>
            <div className="flex h-1/2 w-full justify-center lg:h-full lg:w-5/12 lg:items-end ">
              <img
                src={heroData?.image}
                alt="hero image"
                className=" size-full object-contain object-bottom"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
