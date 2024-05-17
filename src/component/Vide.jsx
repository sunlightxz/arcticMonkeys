import React from 'react'
import singv from '/singx.mp4'

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

const Vide = () => {
   const [playVideo, setPlayVideo] = React.useState(false);
   const vidRef = React.useRef();

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
        <div
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
        </div>
      </div>
      
      <a href='https://arcticmonkeys.ffm.to/thecar' className='md:py-[18px] py-[15px] px-[30px] md:px-[50px] mt-8 border border-[#CFB8B8] text-[#CFB8B8] hover:text-white] rounded-sm text-lg relative hover:bg-[#131211] duration-500 ease-in-out'>Buy & Listen <span className='absolute w-[50px] h-[1px] -right-[1.5rem] top-[50%] bg-white'></span></a>


    </div>
  )
}

export default Vide