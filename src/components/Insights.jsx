import React from 'react'
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
import SentimentBar from './SentimentBar';
import { instaData } from '../Data/instaData';


const Insights = () => {
    let sentimentScore = instaData.stats.instagram.timelineStats.timeline[0].meanSentiment;
  return (
    <div>
         <h1 className='text-center text-lg font-semibold'>Quick Insights</h1>
        <div className='flex justify-center items-center flex-row'>
            <div className='icon-insights-container flex justify-center items-center flex-row'>
                <div className='flex flex-col justify-center mr-5  border-gray-300 shadow-md p-3 rounded-md'>
                    <FaTwitter className='text-blue-400 hover:scale-105' size={30}/>
                    <h3 className='font-semibold py-3'>280K+</h3>
                </div>
                <div className='flex flex-col justify-center mr-8 border-gray-300 shadow-md p-3 rounded-md'>
                    <FaInstagram className='text-purple-500 hover:scale-105 ' size={30}/>
                    <h3 className='font-semibold py-3'>680K+</h3>
                </div>
               <div className='flex flex-col justify-center mr-8 border-gray-300 shadow-md p-3 rounded-md'>
                <FaYoutube className='text-red-600 hover:scale-105' size={30}/>
                <h3 className='font-semibold py-3'>2.3M+</h3>
               </div>
                <div className='flex flex-col justify-center mr-8 border-gray-200 shadow-md p-3 border-r-2 rounded-md'>
                    <FaFacebook className='text-blue-600 hover:scale-105' size={30}/>
                    <h3 className='font-semibold py-3'>50K+</h3>
                </div>
            </div>
            <div>
                <SentimentBar now={sentimentScore}/>
            </div>
        </div>
    </div>
  )
}

export default Insights