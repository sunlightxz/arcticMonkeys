import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import album2 from '/albumx2.png'
import album from '/albumx1.png'
import album3 from '/albumx3.png'
import spoti from '/spotify.png'
import itunes from '/itunes.png'

const Albums = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger the animation when the component is 50% in view
    triggerOnce: true, // Trigger the animation only once
  });

  return (
    <div className='bg-[#131211] py-[100px] lg:px-[80px] md:px-[60px] px-[20px]'>
        <div ref={ref} className="flex flex-col justify-center items-center ">
          <motion.h3 className='text-[#CFB8B8] text-xl font-medium' initial={{ opacity: 0, y: 20 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}>FEATURED</motion.h3>
          <motion.h1 className='text-white text-[34px] font-semibold' initial={{ opacity: 0, y: 20 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}>NEW RELEASE</motion.h1>
          <motion.p className='px-10 pt-2 text-center text-base text-gray-400 font-light' initial={{ opacity: 0, y: 20 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolor quia molestiae culpa <br/> vitae minus necessitatibus aliquid sequi! Molestiae, quo.</motion.p>

          <div className="flex pt-[60px] justify-between ">
            <a className="flex justify-center items-center flex-col gap-2">
              <img src={album} alt="" />
             <div className="flex md:gap-[17px] gap-[10px] mt-[20px]">
                <a href="https://open.spotify.com/album/78bpIziExqiI9qztvNFlQu?si=4i17amkGR72AV-ZrdNT3sw">
                  <img src={spoti} alt="" className='rounded-sm' />
                </a>
                <a href="https://open.spotify.com/album/78bpIziExqiI9qztvNFlQu?si=4i17amkGR72AV-ZrdNT3sw">
                  <img src={itunes} alt="" className='rounded-sm' />
                </a>
             </div>
            </a>
            <a className="flex justify-center items-center flex-col gap-2">
              <img src={album2} alt="" />
              <div className="flex md:gap-[17px] gap-[10px] mt-[20px]">
                <a href="https://open.spotify.com/album/50Zz8CkIhATKUlQMbHO3k1?si=zMuBI8EWR_eqfIARFXl7ng">
                  <img src={spoti} alt="" className='rounded-sm' />
                </a>
                <a href="https://open.spotify.com/album/50Zz8CkIhATKUlQMbHO3k1?si=zMuBI8EWR_eqfIARFXl7ng">
                  <img src={itunes} alt="" className='rounded-sm' />
                </a>
             </div>
            </a>
            <a className="flex justify-center items-center flex-col gap-2">
              <img src={album3} alt="" />
              <div className="flex md:gap-[17px] gap-[10px] mt-[20px]">
              <a href="https://open.spotify.com/album/1XkGORuUX2QGOEIL4EbJKm?si=_kdzpeliTNeU7qhpjn97zw">
                  <img src={spoti} alt="" className='rounded-sm' />
                </a>
                <a href="https://open.spotify.com/album/1XkGORuUX2QGOEIL4EbJKm?si=_kdzpeliTNeU7qhpjn97zw">
                  <img src={itunes} alt="" className='rounded-sm' />
                </a>
             </div>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Albums;
