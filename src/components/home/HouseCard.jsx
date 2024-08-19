
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Autoplay } from 'swiper/modules';
import image1 from "../../assets/pexels-fotios-photos-2816323.jpg";
import image2 from "../../assets/pexels-julia-kuzenkov-442028-1974596.jpg";
import image3 from "../../assets/pexels-pixabay-210538.jpg";
import image4 from "../../assets/pexels-thgusstavo-2102587.jpg";
import image5 from "../../assets/pexels-vince-2265876.jpg";
import image6 from "../../assets/pexels-zachtheshoota-1838640.jpg";

// Array of image imports
const HouseImages = [
  { src: image1, heading: 'House 1', description: 'Add some description for House 1.' },
  { src: image2, heading: 'House 2', description: 'Add some description for House 2.' },
  { src: image3, heading: 'House 3', description: 'Add some description for House 3.' },
  { src: image4, heading: 'House 4', description: 'Add some description for House 4.' },
  { src: image5, heading: 'House 5', description: 'Add some description for House 5.' },
  { src: image6, heading: 'House 6', description: 'Add some description for House 6.' }
];

export default function HouseCard() {
  return (
    <div className='relative'>

       {/* Swiper Section */}
       <div className=' mt-10 px-2 md:px-6'>
        <h2 className="text-center text-3xl font-semibold mb-6 text-[#0dd67f]">Top Rated House</h2>
        <p className="text-center text-lg text-gray-500 mb-16">
          🌟 Top rated house in the country 🌟
        </p>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          navigation
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {HouseImages.map((House, index) => (
            <SwiperSlide key={index} className='relative rounded-xl'>
              <div className='relative overflow-hidden rounded-xl'>
                <img
                  className='object-cover rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105'
                  src={House.src}
                  alt={`House ${index + 1}`}
                  style={{ width: '600px', height: '400px' }}
                />
                <div className='absolute inset-0 bg-black bg-opacity-40 flex items-end justify-end opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                  <div className='text-start text-white p-2 md:p-5'>
                    <h3 className='text-2xl font-bold mb-2'>{House.heading}</h3>
                    <p className='text-lg'>{House.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
     

      {/* Custom CSS for navigation icons */}
      <style jsx>{`
        .swiper-button-next, .swiper-button-prev {
          color: transparent; /* Hide the color of the navigation buttons */
        }
      `}</style>
    </div>
  );
}
