import React from 'react'
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
import SentimentBar from './SentimentBar';
import  instaData  from '../Data/instaData';
import twitterData from '../Data/twitterData';


const Insights = () => {
    let instaSentimentScore = instaData.stats.instagram.timelineStats.timeline[0].meanSentiment;
    let twitterSentimentScore = twitterData.stats.twitter.timelineStats.timeline[0].meanSentimentExternal;
  return (
    <div className='min-w-full'>
         <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 m-2 rounded-md">
        HaiX.AI
      </button>
         <h1 className="text-xl text-black text-center font-bold py-3">Stay ahead with Real-Time Insights</h1>
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
            <SentimentBar sentimentScore={instaSentimentScore} label='Instagram Sentiment' />
            <SentimentBar sentimentScore={twitterSentimentScore} label='Twitter Sentiment' />
            </div>
        </div>
    </div>
  )
}

export default Insights