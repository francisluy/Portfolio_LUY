import { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import { storeLogo, activity, wordart } from "../assets";

const images = [storeLogo, activity, wordart, storeLogo, activity, wordart];

export default function Artworks() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

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
        <h2 className="py-12 text-2xl font-bold">My Artworks</h2>
        <div className="flex w-full  items-center gap-8 overflow-x-auto py-4 pb-8">
          {images.map((src, index) => (
            <img
              src={src}
              onClick={() => openImageViewer(index)}
              width="300"
              height="300"
              key={index}
              alt=""
              className="image-shadow size-[200px] cursor-pointer rounded-lg object-cover"
            />
          ))}

          {isViewerOpen && (
            <ImageViewer
              src={images}
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
