import React from 'react'
import { twitterData } from '../Data/twitterData'
import { instaData } from '../Data/instaData'

const TableInfo = () => {
    let instaSentiment = instaData['stats'].instagram.timelineStats.timeline[0].meanSentiment;
  return (
    <div>
        <h3>Sentiment score</h3>
        <table  className="min-w-full bg-white border border-gray-300 shadow-md"
            border="1px solid"
            cellPadding="10px">
            <tr>
                <th className='py-2 px-4 text-left font-bold'>S.No</th>
                <th className='py-2 px-4 text-left font-bold'>UserName</th>
                <th className='py-2 px-4 text-left font-bold'>Likes</th>
                <th className='py-2 px-4 text-left font-bold'>Verified</th>
                <th className='py-2 px-4 text-left font-bold'>Sentiment</th>
                <th className='py-2 px-4 text-left font-bold'>Comment Text</th>
                <th className='py-2 px-4 text-left font-bold'>Post Text</th>

            </tr>
            <tr>
                <td className='py-2 px-4 text-left font-normal'>{instaData.stats.instagram.timelineStats.timeline[0].date}</td>
                <td className='py-2 px-4 text-left font-normal'>{instaData['Profile Info']['User Info'].user}</td>
                <td className='py-2 px-4 text-left font-normal'>1</td>
                <td className='py-2 px-4 text-left font-normal'>No</td>
                <td className='py-2 px-4 text-left font-normal'>{instaSentiment.toFixed(2) === 0 ? "NEUTRAL" : instaSentiment.toFixed(2) < -0.33 ? "NEGATIVE" : "POSITIVE" }</td>
                <td className='py-2 px-4 text-left font-normal'>Data not found in JSON</td>
                <td className='py-2 px-4 text-left font-normal'>Data not found in JSON</td>
                
            </tr>
            <tr>
                <td className='py-2 px-4 text-left font-normal'>{twitterData.stats.instagram.timelineStats.timeline[0].date}</td>
                <td className='py-2 px-4 text-left font-normal'>{twitterData['Profile Info']['User Info'].user}</td>
                <td className='py-2 px-4 text-left font-normal'>0</td>
                <td className='py-2 px-4 text-left font-normal'>No</td>
                <td className='py-2 px-4 text-left font-normal'>NEGATIVE</td>
                <td className='py-2 px-4 text-left font-normal'>Data not found in JSON</td>
                <td className='py-2 px-4 text-left font-normal'>Data not found in JSON</td>
                
            </tr>
        </table>
    </div>
  )
}

export default TableInfo