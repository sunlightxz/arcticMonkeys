import React from 'react'
import album2 from '/albumx2.png'
import album from '/albumx1.png'
import album3 from '/albumx3.png'
import spoti from '/spotify.png'
import itunes from '/itunes.png'

const Albums = () => {
  return (
    <div className='bg-[#131211] py-[100px] lg:px-[80px] md:px-[60px] px-[20px]'>
        <div className="flex flex-col justify-center items-center ">
          <h3 className='text-[#CFB8B8] text-xl font-medium'>FEATURED</h3>
          <h1 className='text-white text-[34px] font-semibold'>NEW RELEASE</h1>
          <p className='px-10 pt-2 text-center text-base text-gray-400 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolor quia molestiae culpa <br/> vitae minus necessitatibus aliquid sequi! Molestiae, quo.</p>

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

export default Albums