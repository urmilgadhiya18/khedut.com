import React, { useState, useEffect } from 'react';
import image1 from '../assets/image1.jpg'; // Replace with the actual path to your images
import image2 from '../assets/image2.jpg'; // Replace with the actual path to your images
import image3 from '../assets/image3.jpg'; // Replace with the actual path to your images
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5
];

const blogPosts = [
  {
    title: "Blog Post 1",
    description: "This is a short description of the first blog post. It contains an overview of what the blog is about.",
    image: image1
  },
  {
    title: "Blog Post 2",
    description: "This is a short description of the second blog post. It highlights the key points and information covered.",
    image: image2
  },
  {
    title: "Blog Post 3",
    description: "This is a short description of the third blog post. It provides a glimpse into the content and topics discussed.",
    image: image3
  }
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      {/* <div className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center">
        <div className=" mt-12 relative w-full h-[70vh] flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 ">
              <img
                src={image}
                alt={`Slide ${index}`}
                className=" ml-16 rounded-3xl w-[90vw] h-full object-cover"
              />
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className=" mt-16 w-[30px] h-[30px] flex items-center justify-center absolute left-4 text-white bg-black bg-opacity-50 p-2 rounded-[100%] hover:bg-opacity-75 transition"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="mt-16 w-[30px] h-[30px] flex items-center justify-center absolute right-4 text-white bg-black bg-opacity-50 p-2 rounded-[100%] hover:bg-opacity-75 transition"
        >
          &gt;
        </button>
        <div className="absolute bottom-14 w-full flex justify-center space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full bg-white ${index === currentIndex ? 'w-2.5 h-2.5 bg-black' : ''} transition-transform duration-300`}
            ></div>
          ))}
        </div>
      </div> */}
{/* 
<div className="relative w-[100vw] h-[85vh] overflow-hidden flex items-center justify-center">
  <div className="mt-12 relative w-[100vw] h-[75vh] flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
    {images.map((image, index) => (
      <div key={index} className="flex-shrink-0 w-full h-full px-3 sm:px-1">
          <img
            src={image}
            alt={`Slide ${index}`}
            className="rounded-3xl w-full h-full object-cover"
          />
      </div>
    ))}
  </div>
  <button
    onClick={handlePrev}
    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-[30px] h-[30px] flex items-center justify-center text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
  >
    &lt;
  </button>
  <button
    onClick={handleNext}
    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-[30px] h-[30px] flex items-center justify-center text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
  >
    &gt;
  </button>
  <div className="absolute bottom-4 sm:bottom-14 w-full flex justify-center space-x-2">
    {images.map((_, index) => (
      <div
        key={index}
        className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-black' : 'bg-white'} transition-transform duration-300`}
      ></div>
    ))}
  </div>
</div> */}


      <div className=" bg-black-50 mt">
        <div className="w-full max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-6">Latest Blogs</h2>
          <div className="grid grid-cols-1 px-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                  <p className="text-gray-600 line-clamp-3">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      <style jsx='true'>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 3;
        }
      `}</style>
    </div>
    </>
  );
};

export default Home;
