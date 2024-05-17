import React from 'react'
import about from '/abou.png'
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const About = () => {

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
    <motion.div
      className="py-28 flex relative lg:px-[60px] px-[10px] md:px-[30px] w-full"
      
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5 }}
    >
    
      <motion.div
        className="flex justify-center md:flex-row flex-col items-center w-full gap-14"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img className="rounded-md" src={about} alt="" />
        <div className="max-w-[760px] flex flex-col md:justify-center md:items-start items-center bg-[#130F0F] rounded-lg border-b-4 shadow-md shadow-[#CFB8B8] border-[#CFB8B8] border-r-4">
          <h1 className="md:text-3xl text-2xl pt-2 pl-2 font-semibold text-[#CFB8B8]">
            ABOUT
          </h1>
          <div className="pt-[15px] pb-0 md:px-[32px] px-[25px] text-base font-light">
            <motion.p
              className="md:text-base text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Formed in Sheffield, England, in 2002, the Arctic Monkeys
              quickly rose to prominence as one of the most influential indie
              rock bands of the 21st century.
            </motion.p>
            <motion.p
              className="md:text-base py-1 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              The band's original lineup consisted of Alex Turner (vocals,
              guitar), Jamie Cook (guitar), Matt Helders (drums, vocals), and
              Andy Nicholson (bass).
            </motion.p>
            <motion.p
              className="md:text-base text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Known for their energetic live performances and witty lyrics, the
              Arctic Monkeys gained a loyal following through their early
              demos and self-released EPs.
            </motion.p>
          </div>
          <motion.div
            className="w-full flex justify-end pb-[24px] md:pt-0 pt-2 pr-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="https://arcticmonkeys.ffm.to/thecar"
              className="md:py-[12px] py-[10px] px-[22px] md:px-[27px] mt-2 border text-[#CFB8B8] border-[#CFB8B8] rounded-sm relative hover:bg-[#131211]"
            >
              Buy & Listen
              <span className="absolute w-[30px] h-[1px] -right-[1rem] top-[50%] bg-[#CFB8B8]"></span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;