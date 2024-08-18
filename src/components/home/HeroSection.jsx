import React from 'react';
export default function HeroSection() {
    return (
        <div className="hero-section flex flex-col">
            <div class="overlay"></div>
            <div class="hero-content flex flex-col justify-center gap-y-12 items-center h-full">
                <h1 className='font-semibold text-3xl mt-16 md:text-4xl'>Luxury Living in Caribbean Paradise</h1>


                <p className='font-bold text-xl md:text-4xl'>Buy or rent vetted properties  at the <br className='hidden md:block' /> most trusted online real estate portal</p>

            </div>

            {/* This div is for buttons */}

            <div className='flex flex-col gap-y-5 md:flex-row justify-center gap-x-24 items-center w-[95%] md:w-[40%] mb-24'>
                <button class="button-1 w-1/2 md:w-[150px] relative text-sm  tracking-wide py-3 px-5 border border-black cursor-pointer bg-white hover:bg-[#20c78a] hover:text-white transition-all duration-200">
                    Buy
                </button>
                <button class="button-2 w-1/2 md:w-[150px] relative text-sm tracking-wide py-3 border border-black cursor-pointer bg-white hover:bg-black hover:text-white transition-all duration-200">

                    Rent</button>
            </div>
        </div>
    );
}
