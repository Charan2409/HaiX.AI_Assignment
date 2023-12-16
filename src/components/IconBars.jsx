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
    <div className='justify flex items-center justify-center my-5 animate-[wiggle_1s_ease-in-out_infinite]'>
        <animated.div style={fadeIn} className="flex items-center  space-x-4 p-4 bg-gray-800 w-full justify-center shadow-md border-radius text-white">
            <FaTwitter className="text-2xl hover:text-blue-400 animate-bounce hover:scale-105 hover:rotate-[360deg] mx-3 transition duration-300" />
            <FaInstagram className="text-2xl hover:text-purple-500 animate-bounce hover:scale-105 hover:rotate-[360deg] mx-3 transition duration-300" />
            <FaYoutube className="text-2xl hover:text-red-600 animate-bounce hover:scale-105 hover:rotate-[360deg] mx-3 transition duration-300" />
            <FaFacebook className="text-2xl hover:text-blue-600 animate-bounce hover:scale-105 hover:rotate-[360deg] mx-3 transition duration-300" />
    </animated.div>
    </div>
  );
};

export default IconBars;
