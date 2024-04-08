import { useCallback, useEffect, useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { imgPlaceholder } from "../assets";

const defaultImages = [
  imgPlaceholder,
  imgPlaceholder,
  imgPlaceholder,
  imgPlaceholder,
  imgPlaceholder,
  imgPlaceholder,
];

export default function Artworks() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [artworksData, setArtworksData] = useState(defaultImages);

  useEffect(() => {
    const getData = async () => {
      const artworks = collection(db, "artworks");
      try {
        const data = await getDocs(artworks);
        const dataObject = data.docs.map((doc) => doc.data().url);
        setArtworksData(dataObject);
      } catch (error) {
        alert(error);
      }
    };
    getData();
  }, []);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="artworks" className="flex w-full flex-col items-center p-4">
      <div className="flex w-full max-w-[1280px] flex-col items-center border-y-[1px] border-[#1B8057] pb-16">
        <h2 className="py-12 text-3xl font-bold">My Artworks & Photos</h2>
        <div className="flex w-full  items-center gap-8 overflow-x-auto py-4 pb-8">
          {artworksData.map((url, index) => (
            <div
              key={index}
              className="flex min-w-[300px] flex-col items-center gap-4"
            >
              <img
                src={url}
                onClick={() => openImageViewer(index)}
                width="300"
                height="300"
                alt=""
                className="image-shadow size-[300px] cursor-pointer rounded-xl object-cover"
              />
            </div>
          ))}

          {isViewerOpen && (
            <ImageViewer
              src={artworksData}
              currentIndex={currentImage}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
    </div>
  );
}
