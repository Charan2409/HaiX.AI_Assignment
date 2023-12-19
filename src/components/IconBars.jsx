import React from 'react';
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';





const IconBars = () => {
 
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 800 },
  });

  return (
    <div className='justify flex flex-col items-center justify-center w-full my-2 animate-[wiggle_1s_ease-in-out_infinite]'>
        <animated.div style={fadeIn} className="flex items-center  space-x-4 p-4 w-full justify-center  border-radius text-white">
            <FaTwitter size={40} className="text-2xl text-blue-400  hover:scale-105 hover:rotate-[360deg] mx-3 transition duration-300" />
            <FaInstagram  size={40} className="text-2xl text-pink-500  hover:scale-105 hover:rotate-[360deg] mx-3 transition duration-300" />
            <FaYoutube  size={40} className="text-2xl text-red-600  hover:scale-105 hover:rotate-[360deg] mx-3 transition duration-300" />
            <FaFacebook size={40} className="text-2xl text-blue-600  hover:scale-105 hover:rotate-[360deg] mx-3 transition duration-300" />
    </animated.div>
    
    
    </div>
  );
};

export default IconBars;
