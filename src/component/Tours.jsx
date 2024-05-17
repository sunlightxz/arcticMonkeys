import React from 'react'
import snap from '/tumblr.gif'
const Tours = () => {
  return (
    <div className='relative py-14 lg:px-28 px-12  bg-black'>
      <div className="flex md:flex-row flex-col justify-center lg:gap-36 md:gap-24 gap-10 items-center">
        <div className="">
          <img src={snap} alt="" />
        </div>
        <div className="flex flex-col justify-center items-start">
           <h1 className='text-[32px] text-[#CFB8B8] font-medium'>TOURS</h1>
           <div className="md:w-[487px] w-[420px] border-t border-b border-[#CFB8B8] flex justify-between items-center py-5 ">
              <div className="text-[#C1BFBF]">
                <p>Madison Square Garden</p>
                <p>New York, NY</p>
              </div>
              <h1 className='text-[40px] font-Miltonian text-[#C1BFBF]'>19 JUIN</h1>
           </div>
           <div className="md:w-[487px] w-[420px]  border-b border-[#CFB8B8] flex justify-between items-center py-5 ">
              <div className="text-[#C1BFBF]">
                <p>The Forum</p>
                <p></p>
                <p>Los Angeles, CA</p>
              </div>
              <h1 className='text-[40px] font-Miltonian text-[#C1BFBF]'>2 OCT</h1>
           </div>
           <div className="md:w-[487px] w-[420px] border-b border-[#CFB8B8] flex justify-between items-center py-5 ">
              <div className="text-[#C1BFBF]">
                <p>Mohamed VI</p>
                <p>Casablanca, MA</p>
              </div>
              <h1 className='text-[40px] font-Miltonian text-[#C1BFBF]'>25 MAY</h1>
           </div>
           
        </div>  
      </div>

    </div>
  )
}

export default Tours