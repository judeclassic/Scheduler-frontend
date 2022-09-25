//@ts-check
import { useEffect, useState } from 'react'
import { MdMarkEmailUnread } from 'react-icons/md'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu ] = useState(false);

    useEffect(()=>{
        let scrollpos = window.scrollY;
      let header = document.getElementById("header");
      let navcontent = document.getElementById("nav-content");
      let navaction = document.getElementById("navAction");
      let toToggle = document.querySelectorAll(".toggleColour");

      document.addEventListener("scroll", function () {
        /*Apply classes for slide in bar*/
        scrollpos = window.scrollY;

        if (scrollpos > 10) {
          header.classList.add("bg-white");
          navaction.classList.remove("bg-white");
          navaction.classList.add("gradient");
          navaction.classList.remove("text-gray-800");
          navaction.classList.add("text-white");
          //Use to switch toggleColour colours
          for (const element of toToggle) {
            element.classList.add("text-gray-800");
            element.classList.remove("text-white");
          }
          header.classList.add("shadow");
          navcontent.classList.remove("bg-gray-100");
          navcontent.classList.add("bg-white");
        } else {
          header.classList.remove("bg-white");
          navaction.classList.remove("gradient");
          navaction.classList.add("bg-white");
          navaction.classList.remove("text-white");
          navaction.classList.add("text-gray-800");
          //Use to switch toggleColour colours
          for (const element of toToggle) {
            element.classList.add("text-white");
            element.classList.remove("text-gray-800");
          }

          header.classList.remove("shadow");
          navcontent.classList.remove("bg-white");
          navcontent.classList.add("bg-gray-100");
        }
      });
    })

    return (
            <nav id="header" className="fixed w-full z-30 top-0 text-white">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                    <div className="pl-4 flex items-center">
                    <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl flex flex-rol" href="#">
                        <MdMarkEmailUnread size={40} />
                        Scheduler
                    </a>
                    </div>
                    <div className="block lg:hidden pr-4">
                    <button id="nav-toggle" onClick={()=>setShowMobileMenu(true)} className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                    </div>
                    <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
                        <ul className="list-reset lg:flex justify-end flex-1 items-center">
                            <li className="mr-3">
                                <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Active</a>
                            </li>
                            <li className="mr-3">
                                <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">How To</a>
                            </li>
                            <li className="mr-3">
                                <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">FAQ</a>
                            </li>
                            <li className="mr-3">
                                <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">Pricing</a>
                            </li>
                        </ul>
                        <a
                            id="navAction"
                            href='/auth'
                            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                        >
                            Get Started
                        </a>
                    </div>
                    {showMobileMenu && (
                            <>
                                <div className='md:hidden fixed left-0 top-0  h-[100%] w-[100%] flex flex-col justify-between bg-[#f3f3f3] opacity-10' style={{zIndex: 9}} onClick={()=>{setShowMobileMenu(false)}}></div>
                                <div className='md:hidden fixed right-0 top-[60px] w-[100%] bg-[#FFFFFF] p-5 rounded-md flex flex-col justify-between items-center space-y-2' style={{zIndex: 10}}>
                                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                                        <li className="mr-3">
                                            <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Active</a>
                                        </li>
                                        <li className="mr-3">
                                            <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">How To</a>
                                        </li>
                                        <li className="mr-3">
                                            <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">FAQ</a>
                                        </li>
                                        <li className="mr-3">
                                            <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">Pricing</a>
                                        </li>
                                    </ul>
                                    <button
                                        id="navAction"
                                        className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </>
                        )}
                    
                </div>
                <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
             </nav>
    )
}

export default Navbar;



/* <div className="flex font-medium flex-row justify-between h-[50px] w-[100%] p-10 md:px-20 px-5 relative">
                <h2 className="text-xl text-[#000000]">Scheduler</h2>
                <div className="md:flex flex-row hidden justify-between items-center space-x-7">
                    <a className="flex font-normal cursor-pointer">How To</a>
                    <a className="flex font-normal cursor-pointer">FAQ</a>
                    <a className="flex font-normal cursor-pointer">Pricing</a>
                    <a className="flex font-normal cursor-pointer bg-purple-800 p-3 px-7 rounded-lg text-white " href='/auth'>Get Started</a>
                </div>
                <div className="md:hidden">
                {showMobileMenu ?
                    <BiMenu size={24} onClick={()=>setShowMobileMenu((prevState) => !prevState)}/>
                    :
                    <TbArrowBackUp size={24} onClick={()=>setShowMobileMenu((prevState) => !prevState)}/>
                }
                {!showMobileMenu && (
                    <>
                    <div className=' fixed left-0 top-0 h-[100%] w-[100%] flex flex-col justify-between bg-[#f3f3f3] opacity-10' style={{zIndex: 9}} onClick={()=>{setShowMobileMenu(true)}}></div>
                    <div className=' fixed right-5 h-[40%] w-[40%] bg-[#C2C2C2] p-5 rounded-md flex flex-col justify-between items-center space-y-2' style={{zIndex: 10}}>
                        <a className="flex font-normal cursor-pointer bg-purple-800 p-3 px-7 rounded-lg text-white ">Sign Up</a>
                        <a className="flex font-normal cursor-pointer hover:bg-purple-800 p-3 px-7 rounded-lg hover:text-white">Sign In</a>
                        <a className="flex font-normal cursor-pointer hover:bg-purple-800 p-3 px-7 rounded-lg hover:text-white">How To</a>
                        <a className="flex font-normal cursor-pointer hover:bg-purple-800 p-3 px-7 rounded-lg hover:text-white">FAQ</a>
                        <a className="flex font-normal cursor-pointer hover:bg-purple-800 p-3 px-7 rounded-lg hover:text-white">Pricing</a>
                    </div>
                    </>
                )}
                </div>
            </div> */