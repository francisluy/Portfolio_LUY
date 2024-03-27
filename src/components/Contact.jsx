import { useEffect, useState } from "react";
import { LuDownloadCloud } from "react-icons/lu";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { facebook, gmail, instagram, phone } from "../assets";

export default function Contact() {
  const [contactData, setContactData] = useState({
    resume: "",
    email: "name@email.com",
    phone: "+63 XXX-XXXXXXX",
    fbtag: "fb/",
    intag: "@",
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
      className="flex w-full justify-center bg-[url('./assets/halftone.jpg')] bg-cover bg-center px-4 py-12"
    >
      <div className="flex w-full max-w-[850px] flex-col items-center justify-center gap-4">
        <h2 className="w-full py-4 text-center text-3xl font-bold lg:text-left">
          My Contact Information
        </h2>
        <div className="flex w-full max-w-[850px] flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between">
          <div className="w-full max-w-[39ch] text-center lg:h-full lg:pt-10 lg:text-left">
            <p className=" text-pretty">
              Feel free to reach out to me via email or phone call. I look
              forward to hearing from you!
            </p>
          </div>

          <div className="flex w-full max-w-[39ch] flex-col items-center gap-4 py-8 lg:py-0">
            <div className="space-y-2">
              <span className="flex items-center gap-4">
                <img src={gmail} alt="gmail" className=" size-4" />
                {contactData?.email}
              </span>
              <span className="flex items-center gap-4">
                <img src={phone} alt="phone" className=" size-4" />{" "}
                {contactData?.phone}
              </span>
              <span className="flex items-center gap-4">
                <img src={facebook} alt="facebook" className=" size-4" />{" "}
                <a
                  href={contactData?.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  {contactData?.fbtag}
                </a>
              </span>
              <span className="flex items-center gap-4">
                <img src={instagram} alt="instagram" className=" size-4" />{" "}
                <a
                  href={contactData?.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  {contactData?.intag}
                </a>
              </span>
            </div>
            <a
              className="image-shadow mt-4 flex w-40 items-center justify-center gap-2 rounded-md bg-[#1B8057] px-4 py-2 text-[#EDE9A3]"
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
