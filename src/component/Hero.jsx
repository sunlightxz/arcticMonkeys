import React, { useState, useRef } from 'react';
import hero from '/hero.png'
import songImg from '/sngs.png'
import song from '/song.mp3'
import video from '/ahg.gif'
import { motion } from "framer-motion"
import { FaMusic } from "react-icons/fa";

const Hero = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const gifRef = useRef(null);
  const imgRef = useRef(null);

  const togglePlayback = () => {
    const audio = audioRef.current;
    const gif = gifRef.current;
    const img = imgRef.current;

    if (!isPlaying) {
      audio.play();
      gif.style.zIndex = 1;
      img.style.zIndex = 0;
    } else {
      audio.pause();
      gif.style.zIndex = 0;
      img.style.zIndex = 1;
    }
    setIsPlaying(prevState => !prevState);
  };
  return (
    <div className="h-screen w-full relative">
        <img src={hero} className='sm:h-full h-[90%] w-full absolute bg-cover inset-0 z-10' alt="" />
        <div className="flex justify-center items-center flex-col h-full">
            <div className="z-20 flex justify-center flex-col items-center">
              <h1 className='lg:text-[128px] md:text-[100px] sm:text-[70px] xsm:text-[60px] text-[50px] mb-0 font-bold text-white'>Welcome to</h1>
              <h1 className='lg:text-[128px] md:text-[100px] sm:text-[70px] xsm:text-[60px] text-[50px] font-bold text-white'>Arctic Monkeys </h1>
              <p className='md:text-xl text-base font-medium  mb-3'>Experience the cool vibes of Arctic Monkeys music.</p>
              <a href='https://arcticmonkeys.ffm.to/thecar' className='md:py-[18px] py-[15px] px-[30px] md:px-[50px] mt-8 border border-[#CFB8B8] text-[#CFB8B8] hover:text-white] rounded-sm text-lg relative hover:bg-[#131211] duration-500 ease-in-out'>Buy & Listen <span className='absolute w-[50px] h-[1px] -right-[1.5rem] top-[50%] bg-white'></span></a>
            </div>

            <div className="z-20 right-5 bottom-5 fixed justify-center items-center flex flex-col gap-1">
              <button className="music-button " onClick={togglePlayback}>
                <audio ref={audioRef} src={song} />
                <div className="flex justify-center items-center relative">
                <img ref={gifRef} src={video} style={{ zIndex: 0 }} className='absolute' />
                <img ref={imgRef} className='' src={songImg} style={{ zIndex: 1 }}/>
                </div>
              </button>
<span className="font-light text-xs	 uppercase flex ">play<FaMusic />
</span>
            </div>
        </div>
    </div>
  )
}

export default Hero