import React, {useState} from 'react'

function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative ">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-[330px] h-[175px] object-cover bg-cover rounded-t-md "
      />
       <button
          className="absolute top-[85px] left-1 transform -translate-y-1/2  text-white p-2 hover:rounded-full hover:bg-black"
          onClick={prevSlide}
        >
          &#10094;
        </button>

        <button
          className="absolute top-[85px] right-1 transform -translate-y-1/2 text-white p-2 hover:rounded-full hover:bg-black"
          onClick={nextSlide}
        >
          &#10095;
        </button>

    </div>
  );
};

export default Slider;
