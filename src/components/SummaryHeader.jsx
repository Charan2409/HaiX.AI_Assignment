import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import SentimentScatterPlot from './sentimentScatterPlot';
import twitterData from '../Data/twitterData';
import instaData from '../Data/instaData';

const SummaryHeader = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedData, setSelectedData] = useState(null);
  const instaCompanies= instaData['Profile Info']['User Info'].companies;
  // const twitterCompanies = twitterData['Profile Info']['User Info'].companies;

  const handleSearch = (e) => {
    instaCompanies.filter((comp) => (comp.name).includes(e.target.value) ? setSelectedData({ data: instaData, source: 'instagram' }) : setSelectedData({ data: twitterData, source: "twitter"}))
    ;
    console.log(selectedData)
  };
  console.log(instaCompanies)
  

  return (
    <div className="min-w-full">
      <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 m-2 rounded-md">
        HaiX.AI
      </button>
      <h1 className="text-xl text-black text-center font-bold py-3">Stay ahead with Real-Time Insights</h1>
      <div className="flex justify-center py-2 my-2">
        <div className="relative">
          <input
            type="search"
            className="border-solid focus: border-black border-2 pl-8 pr-4 w-[500px]"
            placeholder="Start typing in any topic/company name"
            value={searchText}
            onChange={handleSearch}
          />
          <IoSearch className="absolute left-2 top-2 text-gray-500" />
        </div>
        <button className="ml-2 bg-blue-500 text-white p-2 rounded-md" onClick={handleSearch}>
          Search
        </button>
      </div>

      {selectedData && <SentimentScatterPlot data={selectedData.data} source={selectedData.source} />}
    </div>
  );
};

export default SummaryHeader;
