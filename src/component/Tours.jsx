import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import snap from '/tumblr.gif'

const Tours = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger the animation when the component is 50% in view
    triggerOnce: true, // Trigger the animation only once
  });

  return (
    <div className='relative py-14 lg:px-28 px-12  bg-black'>
      <div ref={ref} className="flex md:flex-row flex-col justify-center lg:gap-36 md:gap-24 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}>
          <img src={snap} alt="" />
        </motion.div>
        <div className="flex flex-col justify-center items-start">
           <h1 className='text-[32px] text-[#CFB8B8] font-medium'>TOURS</h1>
           <motion.div className="md:w-[487px] w-[420px] border-t border-b border-[#CFB8B8] flex justify-between items-center py-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}>
              <div className="text-[#C1BFBF]">
                <p>Madison Square Garden</p>
                <p>New York, NY</p>
              </div>
              <h1 className='text-[40px] font-Miltonian text-[#C1BFBF]'>19 JUIN</h1>
           </motion.div>
           <motion.div className="md:w-[487px] w-[420px]  border-b border-[#CFB8B8] flex justify-between items-center py-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}>
              <div className="text-[#C1BFBF]">
                <p>The Forum</p>
                <p>Los Angeles, CA</p>
              </div>
              <h1 className='text-[40px] font-Miltonian text-[#C1BFBF]'>2 OCT</h1>
           </motion.div>
           <motion.div className="md:w-[487px] w-[420px] border-b border-[#CFB8B8] flex justify-between items-center py-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}>
              <div className="text-[#C1BFBF]">
                <p>Mohamed VI</p>
                <p>Casablanca, MA</p>
              </div>
              <h1 className='text-[40px] font-Miltonian text-[#C1BFBF]'>25 MAY</h1>
           </motion.div>
           
        </div>  
      </div>

    </div>
  )
}

export default Tours;
