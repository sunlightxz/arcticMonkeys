import React from 'react'
import singv from '/singx.mp4'
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

const Vide = () => {
   const [playVideo, setPlayVideo] = React.useState(false);
   const vidRef = React.useRef();
   const { ref, inView } = useInView({
    threshold: 0.5, // Trigger the animation when the About section is 50% in view
    triggerOnce: true, // Trigger the animation only once
  });

  useEffect(() => {
    if (inView) {
      // Start animations when the About section is in view
    }
  }, [inView]);
  return (
    <div className= "h-screen relative py-28 flex-col flex justif-center items-center">
      <video
        className='w-full h-[90%] object-cover'
        src={singv}
        loop
        controls={false}
        type="video/mp4"
        muted
        ref={vidRef}
      /> 

      <div className="absolute inset-0 bg-black opacity-65 flex justify-center items-center">
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1 }}
          className="w-[100px] h-[100px] rounded-full border border-[#CFB8B8] cursor-pointer flex justify-center items-center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#CFB8B8" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#CFB8B8" fontSize={30} />
          )}
        </motion.div>
      </div>
      
      <motion.a 
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
             
            transition={{ duration: 0.5,}} href='https://arcticmonkeys.ffm.to/thecar' className='md:py-[18px] py-[10px] px-[22px]  md:px-[50px] mt-8 border border-[#CFB8B8] text-[#CFB8B8] hover:text-white] rounded-sm text-lg relative hover:bg-[#131211] duration-500 ease-in-out'>
              Buy & Listen 
              <span className='absolute w-[30px] h-[1px] -right-[1rem] top-[50%] bg-white'>
              </span>
              </motion.a>


    </div>
  )
}

export default Vide