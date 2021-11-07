import { useState } from "react";

const Carousel = ({ test, setSelectedItem }) => {
  const [actualImage, setActualImage] = useState(0);
  const { images } = test;
  return (
    <div className="relative rounded-lg block md:flex shadow-xl w-1/3 mt-8 ml-8">
      <button
        onClick={() => {
          let currentImg = actualImage;
          currentImg -= 1;
          if (currentImg >= 0){
            setActualImage(currentImg);
            setSelectedItem(currentImg);
          }
        }}
        className="absolute md:mt-32 mt-6 left-0 bg-white rounded-full shadow-md md:h-12 md:w-12 h-6 w-6 md:text-2xl text-base text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 md:-ml-6 -ml-3 focus:outline-none focus:shadow-outline transform rotate-180"
      >
        <span className="block">&#x279c;</span>
      </button>
      <button
        onClick={() => {
          let currentImg = actualImage;
          currentImg += 1;
          if (currentImg < images.length){
            setActualImage(currentImg);
            setSelectedItem(currentImg);
          }
        }}
        className="absolute md:mt-32 mt-6 right-0 bg-white rounded-full shadow-md md:h-12 md:w-12 h-6 w-6 md:text-2xl text-base text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 md:-mr-6 -mr-3 focus:outline-none focus:shadow-outline"
      >
        <span className="block">&#x279c;</span>
      </button>
      {/* <!-- Carousel Tabs --> */}
      <div className="flex">
        {images.map((image, index) => (
          <div  key={image.id}>
            {index===actualImage ? (<img
            className="object-contain"
              src = {image.originalSrc}
              alt={image.altText}
            />):<div/>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
