import React from 'react'
import  twitterData  from '../Data/twitterData'
import  instaData  from '../Data/instaData'

const TableInfo = () => {
    let instaSentiment = instaData['stats'].instagram.timelineStats.timeline[0].meanSentiment;
    let twitterSentiment = twitterData['stats'].twitter.timelineStats.timeline[0].meanSentiment;
  return (
    <div>
        <h3 className='mx-4'>Sentiment score</h3>
        <table  className="min-w-screen-lg ml-5 bg-white border border-black-300 "
            border="3px solid black"
            cellPadding="10px ">
                <div className='max-w-screen-lg'>
                    <button className='bg-blue-400 py-2 px-3 m-1 text-white hover:bg-blue-600 '>Read</button>
                    <button className='bg-blue-400 py-2 px-3 m-1 text-white hover:bg-blue-600 '>Lead Type</button>
                    <button className='bg-blue-400 py-2 px-3 m-1 text-white hover:bg-blue-600 '>Push to Hubspot CRM</button>
                    <button className='bg-blue-400 py-2 px-3 m-1 text-white hover:bg-blue-600 '>Export</button>
                </div>
                <tbody>
            <tr className='bg-gray-300 border-solid'>
                <th className='py-2 px-4 text-left font-bold border'>Date</th>
                <th className='py-2 px-4 text-left font-bold border'>UserName</th>
                <th className='py-2 px-4 text-left font-bold border'>Likes</th>
                <th className='py-2 px-4 text-left font-bold border'>Verified</th>
                <th className='py-2 px-4 text-left font-bold border'>Sentiment</th>
                <th className='py-2 px-4 text-left font-bold border'>Comment Text</th>
                <th className='py-2 px-4 text-left font-bold border'>Post Text</th>

            </tr>
            <tr>
                <td className='py-2 px-4 text-left font-normal border'>{instaData.stats.instagram.timelineStats.timeline[0].date}</td>
                <td className='py-2 px-4 text-left font-normal border'>{instaData['Profile Info']['User Info'].user}</td>
                <td className='py-2 px-4 text-left font-normal border'>1</td>
                <td className='py-2 px-4 text-left font-normal border'>No</td>
                <td className='py-2 px-4 text-left font-normal border'>{instaSentiment.toFixed(2) === 0 ? "NEUTRAL" : instaSentiment.toFixed(2) < -0.33 ? "NEGATIVE" : "POSITIVE" }</td>
                <td className='py-2 px-4 text-left font-normal border'>Good one!</td>
                <td className='py-2 px-4 text-left font-normal border'>Post -1 </td>
                
            </tr>
            <tr>
                <td className='py-2 px-4 text-left font-normal border'>{twitterData.stats.twitter.timelineStats.timeline[0].date}</td>
                <td className='py-2 px-4 text-left font-normal border'>{twitterData['Profile Info']['User Info'].user}</td>
                <td className='py-2 px-4 text-left font-normal border'>0</td>
                <td className='py-2 px-4 text-left font-normal border'>No</td>
                <td className='py-2 px-4 text-left font-normal border'>{twitterSentiment.toFixed(2) ===0 ? "NEUTRAL" : instaSentiment.toFixed(2) < -0.33 ? "NEGATIVE" : "POSITIVE" }</td>
                <td className='py-2 px-4 text-left font-normal border'>Great!</td>
                <td className='py-2 px-4 text-left font-normal border'>Post 2</td>
                
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TableInfo