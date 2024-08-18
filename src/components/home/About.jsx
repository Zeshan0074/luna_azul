import React from 'react';
import img from "../../assets/7fca38a1c6e6a08e894a.svg";

export default function About() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center mx-4 md:mx-0 mt-10 px-10'>
      <div className='w-full md:w-[60%] text-center md:text-left mb-8 md:mb-0'>
        <h1 className="text-center md:text-start text-3xl font-semibold  mb-6 text-[#0eedaa]">
          ABOUT LUNA AZUL
        </h1>
        <p className="text-lg text-start">
          Luna Azul Roatan Real Estate is a new investment opportunity located on the island of Roatan. It was created by the European developer behind several other successful developments in the French Harbour area of Roatan, including Coral Views Village, White Hill, and Pangea Beach.
        </p>
      </div>
      <div className='w-full md:w-[40%] flex justify-center'>
        <img src={img} alt="image" className='max-w-full h-auto' />
      </div>
    </div>
  );
}
