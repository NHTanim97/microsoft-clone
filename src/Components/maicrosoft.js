import React from 'react';
import laptop from '../Components/slider/laptop.webp'
import logo from '../Components/slider/maicrosoft.png'
import promo1 from '../Components/slider/365.png'
import promo2 from '../Components/slider/surface.webp'
import promo3 from '../Components/slider/gmaes.webp'
import promo4 from '../Components/slider/windows.png'
import promo5 from '../Components/slider/pc.webp'
import promo6 from '../Components/slider/business.webp'
import search from '../Components/slider/search.svg'
import cart from '../Components/slider/shopping-cart.svg'
import user from '../Components/slider/user.svg'
import downArrow from '../Components/slider/down-arrow-svgrepo-com.svg'
import laptop1 from '../Components/slider02/l1.webp'
import laptop2 from '../Components/slider02/l2.webp'
import hphone from '../Components/slider02/h1.webp'
import games from '../Components/slider02/g1.webp'
import xbox from '../Components/xbox/xbox.jpg'
import s1 from '../Components/slider03/s1.webp'
import s2 from '../Components/slider03/s2.webp'
import s3 from '../Components/slider03/s3.webp'
import s4 from '../Components/slider03/s4.webp'
import bgimage from '../Components/sliderbg/bgs.jpg'
import facebook from '../Components/socialicon/facebook.svg'
import twitter from '../Components/socialicon/twitter.svg'
import linkin from '../Components/socialicon/linkedin.svg'
import { RiArrowRightSLine } from "react-icons/ri";

const Maicrosoft = () => {
    return (
        <div className=''>
            {/* ------Navbar start here------ */}
            <div className=' mx-9 my-2 md:my-6 flex items-center justify-between'>
                {/* Hamburger */}
                 <div className='flex justify-center items-center md:order-2'>
                    <div className='hamburger inline-block p-4 cursor-pointer md:hidden'>
                        <div className='line w-6 h-0.5 my-1 bg-black'></div>
                        <div className='line w-6 h-0.5 my-1 bg-black'></div>
                        <div className='line w-6 h-0.5 my-1 bg-black'></div>
                    </div>
                    <div className='md:hidden'>
                        <img className='w-5 cursor-pointer' src={search} alt="" />
                    </div>
                 </div>
                {/* ---------- */}




                {/* Logo Nav Items*/}
                 <div className='logONav md:order-1 flex'>
                    <div className='text-center w-24 cursor-pointer'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='maicrofeatures w-fit md:w-auto bg-gray-200 md:bg-white md:static absolute inset-0 -translate-x-96 md:translate-x-0 md:flex md:mx-4 md:space-x-3'>
                        <div className='text-sm font-light cursor-pointer'>Maicrosoft 365</div>
                        <div className='text-sm font-light cursor-pointer'>Office</div>
                        <div className='text-sm font-light cursor-pointer'>Windows</div>
                        <div className='text-sm font-light cursor-pointer'>Surface</div>
                        <div className='text-sm font-light cursor-pointer'>Xbox</div>
                        <div className='text-sm font-light cursor-pointer'>Support</div>
                    </div>
                </div>





                {/* Cart Account */}
                <div className='cartAccount md:order-3 flex space-x-4'>
                    <div className='hidden md:block md:flex md:flex-row space-x-1'>
                        <p className='text-sm font-light'>All Maicrosoft</p>
                        <img className='w-2 py-2 cursor-pointer' src={downArrow} alt="" />
                    </div>
                    <div className='space-x-6 flex'>
                        <img className='hidden md:block w-5 cursor-pointer' src={search} alt="" />
                        <div className='text-center pr-4 flex flex-row space-x-4'>
                            <img className='w-5 cursor-pointer' src={cart} alt="" />
                            <img className='w-5 cursor-pointer' src={user} alt="" />
                        </div>
                    </div>
                </div>
                {/* ---------- */}




            </div>
            {/* ------Navbar end here------ */}




            {/* ------Slider start here------ */}
            <div className='slider flex flex-col-reverse md:flex-row md:bg-[#F2F2F2] bg-[#e6e6e6]'>
                {/* left */}
                <div className='left md:mx-16 my-16 md:my-28 space-y-2 md:space-y-3 flex flex-col justify-center items-center md:items-baseline'>
                    <h1 className='font-bold text-2xl'>Maicrosoft 365</h1>
                    <p className='w-3/4 md:text-base md:text-left text-center font-light'>Premium Office apps, extra cloud storage, advanced security, and more—all in one convenient subscription</p>
                    <div className='flex flex-col md:flex-row'>
                        <button className='bg-black text-white px-4 py-2 cursor-pointer flex flex-row items-center justify-center'>For up to 6 people <RiArrowRightSLine/></button>
                        <p className='cursor-pointer m-auto mt-2 md:ml-6 flex items-center justify-center font-semibold'>For 1 person <RiArrowRightSLine/></p>
                    </div>
                </div>
                {/* ---------- */}


                {/* right */}
                <div className='right my=12'>
                    <img className='w-screen' src={laptop} alt="" />
                </div>
                {/* ---------- */}
            </div>
            {/* ------Slider end here------ */}



            {/* -------Maicrosoft promo start here------- */}
            <div className='promo mx-10 my-16 space-y-6 md:flex md:flex-row items-center justify-center'>
                <div className='flex md:flex-col items-center md:w-1/2 md:mt-7'>
                    <img className='w-6 cursor-pointer' src={promo1} alt="" />
                    <span className='font-medium mx-3 md:font-normal pt-2 hover:underline cursor-pointer'>Choose your Microsoft 365</span>
                </div>
                <div className='flex md:flex-col items-center md:w-1/2'>
                    <img className='w-6 cursor-pointer' src={promo2} alt="" />
                    <span className='font-medium mx-3 md:font-normal pt-2 hover:underline cursor-pointer'>Shop Surface Devices</span>
                </div>
                <div className='flex md:flex md:flex-col items-center md:w-1/2'>
                    <img className='w-6 cursor-pointer' src={promo3} alt="" />
                    <span className='font-medium mx-3 md:font-normal pt-2 hover:underline cursor-pointer'>Buy Xbox games and consols</span>
                </div>
                <div className='flex md:flex-col items-center md:w-1/2 md:-mt-6'>
                    <img className='w-6 cursor-pointer' src={promo4} alt="" />
                    <span className='font-medium mx-3 md:font-normal pt-2 cursor-pointer hover:underline'>Get windows 11</span>
                </div>
                <div className='flex md:flex-col items-center md:w-1/2'>
                    <img className='w-6 cursor-pointer' src={promo5} alt="" />
                    <span className='font-medium mx-3 md:font-normal pt-2 cursor-pointer hover:underline'>Find your next PC</span>
                </div>
                <div className='flex md:flex-col items-center md:justify-center md:w-1/2'>
                    <img className='w-6 cursor-pointer' src={promo6} alt="" />
                    <span className='font-medium mx-3 md:font-normal pt-2 hover:underline cursor-pointer'>Shop Business</span>
                </div>
            </div>
            {/* -------Maicrosoft promo end here------- */}




            {/* -------Image slider start here------- */}
            <div className='imageSlider px-6 py-2 space-y-16 md:grid md:grid-cols-2 lg:grid-cols-4 md:space-x-8 lg:space-x-8'>
                <div className='space-y-3 md:mt-16'>
                    <img className='w-full pb-6' src={laptop1} alt="" />
                    <span className='font-bold cursor-pointer'>Surface Laptop 4</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <span className='cursor-pointer text-blue-600 hover:underline font-medium flex flex-row items-center'>Shop now <RiArrowRightSLine/></span>
                </div>   

                <div className='space-y-3'>
                    <img className='w-full pb-6' src={laptop2} alt="" />
                    <span className='font-bold cursor-pointer'>Up to $300 off select Surface Laptop Studio</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <span className='cursor-pointer text-blue-600 hover:underline font-medium flex flex-row items-center'>Shop now <RiArrowRightSLine/></span>
                </div> 


                <div className='space-y-3'>
                    <img className='w-full pb-6' src={hphone} alt="" />
                    <span className='font-bold cursor-pointer'>Never miss a beat</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <span className='cursor-pointer text-blue-600 hover:underline font-medium flex flex-row items-center'>Shop now <RiArrowRightSLine/></span>
                </div> 

                <div className='space-y-3'>
                    <img className='w-full pb-6' src={games} alt="" />
                    <span className='font-bold cursor-pointer'>PC Game Pass</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <span className='cursor-pointer text-blue-600 hover:underline font-medium flex flex-row items-center'>Shop now <RiArrowRightSLine/></span>
                </div> 

            </div>
            {/* -------Image slider end here------- */}



            {/* -------xbox slider start------- */}
            <div className='xbox flex my-14 py-8 flex-col-reverse md:flex-row md:items-center md:justify-center bg-[#E6E6E6]'>
                <div className='left md:mt-12 md:ml-4 mb-16 mt-4 flex flex-col items-center justify-center space-y-2 md:items-baseline'>
                    <h1 className='font-bold text-2xl'>Xbox Series S</h1>
                    <p>Next-gen performance in the smallest Xbox ever</p>
                    <button className='flex flex-row items-center justify-center bg-black text-white py-2 px-4 font-semibold hover:underline'>Shop now</button>
                </div>
                <div className=''>
                    <img className='md:w-96' src={xbox} alt="" />
                </div>
            </div>
            {/* -------xbox slider end here------- */}




            {/* -------For business slider start here------- */}
            <div className='business px-6 py-2 space-y-16 md:grid md:grid-cols-2 lg:grid-cols-4 md:space-x-8 lg:space-x-8'>
                <div className='space-y-3 md:mt-16'>
                    <img className='w-full pb-6' src={s1} alt="" />
                    <h1 className='font-bold cursor-pointer'>Save $150 on select Surface Pro 7+ for Business</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <span className='cursor-pointer text-blue-600 hover:underline font-medium flex flex-row items-center'>Shop now <RiArrowRightSLine/></span>
                </div>

                <div className='space-y-3'>
                    <img className='w-full pb-6' src={s2} alt="" />
                    <h1 className='font-bold cursor-pointer'>Save $150 on select Surface Pro 7+ for Business</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <span className='cursor-pointer text-blue-600 hover:underline font-medium flex flex-row items-center'>Shop now <RiArrowRightSLine/></span>
                </div>

                <div className='space-y-3'>
                    <img className='w-full pb-6' src={s3} alt="" />
                    <h1 className='font-bold cursor-pointer'>Save $150 on select Surface Pro 7+ for Business</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <span className='cursor-pointer text-blue-600 hover:underline font-medium flex flex-row items-center'>Shop now <RiArrowRightSLine/></span>
                </div>

                <div className='space-y-3'>
                    <img className='w-full pb-6' src={s4} alt="" />
                    <h1 className='font-bold cursor-pointer'>Save $150 on select Surface Pro 7+ for Business</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <span className='cursor-pointer text-blue-600 hover:underline font-medium flex flex-row items-center'>Shop now <RiArrowRightSLine/></span>
                </div>
            </div>
            {/* -------For business slider end here------- */}




            {/* -------slider bg start here------- */}
            <div className='sliderbg py-12 px-6'>
                <img className='md:w-screen md:relative md:bg-cover hidden md:block' src={bgimage} alt="" />
                <div className='bg-gray-500 w-screen h-80 relative md:hidden lg:hidden'></div>
                <div className='absolute -mt-64 space-y-3 px-7 flex flex-col items-center justify-center md:items-baseline md:w-3/5 md:mx-14 md:-mt-60 lg:-mt-72'>
                    <h1 className='font-bold text-2xl text-white '>Women's History Month</h1>
                    <p className='text-white font-light'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
                    <button className='py-2 px-4 bg-white text-black'>Learn more</button>
                </div>
                
            </div>
            {/* -------slider bg end here------- */}



            {/* -------social icon start here------- */}
            <div className='socialicon flex flex-row space-x-3 items-center mx-6'>
                <h1 className='font-light cursor-pointer'>Follow Microsoft</h1>
                <img className='w-6 cursor-pointer' src={facebook} alt="" />
                <img className='w-6 cursor-pointer' src={twitter} alt="" />
                <img className='w-6 cursor-pointer' src={linkin} alt="" />
            </div>
            {/* -------social icon end here------- */}



            {/* footer start here */}
            <div className='footer flex flex-col space-y-9 pb-10 px-10 mt-12 bg-gray-100 md:grid md:grid-cols-3 lg:grid-cols-6 md:py-4 lg:py-4 md:pl-16'>
                <div className='Whatnews space-y-3 md:py-9 lg:py-9'>
                    <span className='font-bold cursor-pointer hover:underline text-gray-700'>What's new</span>
                    <p className='font-light text-sm cursor-pointer hover:underline'>Surface Pro 8</p>
                    <p className='font-light text-sm cursor-pointer hover:underline'>Surface Laptop Studio</p>
                    <p className='font-light text-sm cursor-pointer hover:underline'>Surface Pro X</p>
                    <p className='font-light text-sm cursor-pointer hover:underline'>Surface Go 3</p>
                    <p className='font-light text-sm cursor-pointer hover:underline'>Surface Duo 2</p>
                    <p className='font-light text-sm cursor-pointer hover:underline'>Surface Pro 7+</p>
                    <p className='font-light text-sm cursor-pointer hover:underline'>Windows 11 apps</p>
                    <p className='font-light text-sm cursor-pointer hover:underline'>HoloLens 2</p>
                </div>

                <div className='Microsoft Store space-y-3'>
                <span className='font-bold cursor-pointer hover:underline text-gray-700'>Microsoft Store</span>
                <p className='font-light text-sm cursor-pointer hover:underline'>Account profile</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Download Center</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>support</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Returns</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Order tracking</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Virtual workshops and training</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Microsoft Store Promise</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Flexible Payments</p>
                </div>


                <div className='Education space-y-3'>
                <span className='font-bold cursor-pointer hover:underline text-gray-700'>Education</span>
                <p className='font-light text-sm cursor-pointer hover:underline'>Microsoft in education</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Office for students</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Office 365 for schools</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Deals for students & parents</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Microsoft Azure in education</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Education consultation appointment</p>
                </div>


                <div className='Enterprise space-y-3'>
                <span className='font-bold cursor-pointer hover:underline text-gray-700'>Enterprise</span>
                <p className='font-light text-sm cursor-pointer hover:underline'>Azure</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>AppSource</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Automotive</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Government</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Healthcare</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Manufacturing</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Financial services</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Retail</p>
                </div>


                <div className='Developer space-y-3'>
                <span className='font-bold cursor-pointer hover:underline text-gray-700'>Developer</span>
                <p className='font-light text-sm cursor-pointer hover:underline'>Microsoft Visual Studio</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Windows Dev Center</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Developer Center</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Microsoft developer program</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Channel 9</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Microsoft 365 Dev Center</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Microsoft 365 Developer Program</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Microsoft Garage</p>
                </div>


                <div className='Company space-y-3'>
                <span className='font-bold cursor-pointer hover:underline text-gray-700'>Company</span>
                <p className='font-light text-sm cursor-pointer hover:underline'>Careers</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>About Microsoft</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Company news</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Privacy at Microsoft</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>nvestors</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Diversity and inclusion</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Accessibility</p>
                <p className='font-light text-sm cursor-pointer hover:underline'>Security</p>
                </div>
            </div>
            {/* footer end here */}



            {/* copy right start here */}
            <div className='copy p-6 bg-slate-900'>
                <p className='px-6 font-light text-slate-500 md:text-center'>All CopyRight@2022 March 03</p>
            </div>
            {/* copy right end here*/}
        </div>
    );
};

export default Maicrosoft;