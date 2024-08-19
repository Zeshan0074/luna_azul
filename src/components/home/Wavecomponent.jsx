
import React from 'react';
import Wave from 'react-wavify';
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

export default function Wavecomponent() {
  return (
    <div className='relative'>

       {/* Swiper Section */}
       <div className='relative z-20 mt-10 px-2 md:px-6'>
        <h2 className="text-center text-3xl font-semibold mb-6 text-[#0eedaa]">Top Rated House</h2>
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
      
      {/* Wave Container */}
      <div className='absolute bottom-6 mt-12 left-0 w-full '>
        <Wave
          className='absolute top-0 left-0 w-full h-[40vh]'
          fill="url(#oceanGradient)"
          paused={false}
          style={{ display: 'flex' }}
          options={{
            height: 60,
            amplitude: 40,
            speed: 0.2,
            points: 8
          }}
        />
        <Wave
          className='absolute top-0 left-0 w-full h-[45vh]'
          fill="#0088cc"
          paused={false}
          options={{
            height: 60,
            amplitude: 45,
            speed: 0.2,
            points: 4
          }}
        />
        <Wave
          className='absolute top-0 left-0 w-full h-[45vh]'
          fill="#005f99"
          paused={false}
          options={{
            height: 120,
            amplitude: 50,
            speed: 0.25,
            points: 6
          }}
        />
        <svg width="0" height="0">
          <defs>
            <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#00aaff', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#0044ff', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
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
