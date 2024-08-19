import React from 'react';
import img1 from '../../assets/pexels-fotios-photos-2816323.jpg';
import img2 from '../../assets/pexels-fotios-photos-2816323.jpg';
import img3 from '../../assets/pexels-fotios-photos-2816323.jpg';

const LuxuryAmenities = () => {
  const amenities = [
    {
      title: "Luxury & Comfort",
      description:
        "Immerse yourself in natural light and stunning ocean vistas at Luna Azul Resort. Designed with your comfort and relaxation in mind, our exceptional amenities provide the perfect complement to your dream Caribbean property.",
      image: img1,
      customClass: 'rounded-top-left', // Applies top-left rounding
    },
    {
      title: "Modern Architectural Design",
      description:
        "Experience the pinnacle of eco-friendly, luxury living at Luna Azul Resort. Our thoughtful, modern architectural design seamlessly blends sophisticated style with a commitment to sustainability, offering panoramic ocean views that will captivate your senses.",
      image: img2,
      customClass: '', // No custom rounding
    },
    {
      title: "Great Location",
      description:
        "Nestled in a private, secluded setting and surrounded by lush greenery, Luna Azul Resort offers the perfect balance of accessibility and tranquility. Indulge in panoramic ocean views from the comfort of your own personal oasis.",
      image: img3,
      customClass: 'rounded-bottom-right', // Applies bottom-right rounding
    },
  ];

  return (
    <div className="container mx-auto mt-[340px] px-4 lg:px-8 pt-12 bg-gray-100">
      <h2 className="text-center text-3xl font-semibold  mb-6 text-[#0dd67f]">LUXURY AMENITIES</h2>
      <p className="text-center text-lg text-gray-500 mb-16">Designed for Your Lifestyle</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {amenities.map((amenity, index) => (
          <div key={index} className="amenity-container">
            <div className={`amenity-image ${amenity.customClass}`}>
              <img
                src={amenity.image}
                alt={amenity.title}
                className=''
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-6">{amenity.title}</h3>
            <p className="text-gray-600 mt-4 text-start">{amenity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LuxuryAmenities;
