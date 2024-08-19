import React from 'react'
import Wave from 'react-wavify';
import sandimg from "../../assets/sandimage.png";



export default function SandWaves() {
  return (
    <div className='mt-16'>
        <div>
            <img src={sandimg} alt="imag" className='h-[220px] w-full'/>

        </div>
       {/* Wave Container */}
       <div className='mt-12 w-full relative -top-40'>
        <Wave
          className='absolute  left-0 w-full h-[40vh]'
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
          className='absolute left-0 w-full h-[45vh]'
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
          className='absolute  left-0 w-full h-[45vh]'
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
    </div>
  )
}
