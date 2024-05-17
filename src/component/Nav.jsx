import logo from '/logo.png'

const Nav = () => {
  return (
    <nav className="w-full flex justify-between items-center py-6 sm:px-14 xs:px-6 px-2    z-20">
         <div className="flex justify-start items-center nav-img ">
            <img className='md:w-full w-[140px]' src={logo} alt="" />
        </div>
        <div className="flex items-center justify-between lg:gap-32 gap-20">
            <div className="hidden md:block">
                <div className="flex gap-14 items-center justify-center">
                <h1 className='lg:text-2xl text-xl font-bold  cursor-pointer duration-500 ease-out text-[#CFB8B8] hover:text-white'>About</h1>
                <h1 className='lg:text-2xl text-xl font-bold cursor-pointer duration-500 ease-out text-[#CFB8B8] hover:text-white'>Store</h1>
                <h1 className='lg:text-2xl text-xl font-bold cursor-pointer duration-500 ease-out text-[#CFB8B8] hover:text-white'>Live</h1>
                <h1 className='lg:text-2xl text-xl font-bold  cursor-pointer duration-500 ease-out text-[#CFB8B8] hover:text-white'>Tour</h1>
                </div>
            </div>
            <div className="">
                <h1 className='text-xl cursor-pointer duration-500 ease-out text-[#CFB8B8] hover:text-white'>Sign Up</h1>
            </div>
        </div>
    </nav>
  )
}

export default Nav