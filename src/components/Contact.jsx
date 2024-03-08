import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { LuPhone, LuMail, LuDownloadCloud } from "react-icons/lu";

export default function Contact() {
  const [contactData, setContactData] = useState({
    resume: "",
    email: "name@email.com",
    phone: "+63 XXX-XXXXXXX",
  });

  useEffect(() => {
    const getData = async () => {
      const contact = collection(db, "contact");
      try {
        const data = await getDocs(contact);
        const dataObject = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setContactData(dataObject[0]);
      } catch (error) {
        alert(error);
      }
    };
    getData();
  }, []);

  return (
    <div
      id="contact"
      className="flex w-full  justify-center bg-gradient-to-r from-green-200 to-amber-50 px-4 py-12"
    >
      <div className="flex w-full max-w-[850px] flex-col items-center justify-center gap-4">
        <h2 className="w-full py-4 text-center text-2xl font-bold lg:text-left">
          My Contact Information
        </h2>
        <div className="flex w-full max-w-[850px] flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between">
          <div className="w-full max-w-[39ch]  text-center lg:text-left">
            <p className=" text-pretty">
              Feel free to reach out to me via email or phone call. I look
              forward to hearing from you!
            </p>
          </div>

          <div className="flex w-full max-w-[39ch] flex-col items-center gap-4 py-8 lg:py-0 ">
            <span className="flex items-center gap-4">
              <LuMail /> {contactData?.email}
            </span>
            <span className="flex items-center gap-4">
              <LuPhone /> {contactData?.phone}
            </span>
            <a
              className="image-shadow mt-4 flex items-center gap-2 rounded-md bg-[#1B8057] px-4 py-2 text-[#EDE9A3]"
              href={contactData?.resume}
              target="_blank"
              rel="noreferrer"
            >
              <LuDownloadCloud />
              <span>My Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
