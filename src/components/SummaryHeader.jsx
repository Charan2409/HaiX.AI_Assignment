import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import SentimentScatterPlot from './sentimentScatterPlot';
import twitterData from '../Data/twitterData';
import { useSentimentContext } from '../context/SentimentContext';
import instaData from '../Data/instaData';

const SummaryHeader = () => {
  const { setSentimentData } = useSentimentContext();
  const [searchText, setSearchText] = useState('');
  const [selectedData, setSelectedData] = useState(null);
  const instaCompanies= instaData['Profile Info']['User Info'].companies;
  const twitterCompanies = twitterData['Profile Info']['User Info'].companies;

  const handleSearch = (e) => {
    setSearchText(e.target.value)
    const searchTerm = e.target.value.toLowerCase();
  
    const instaCompanyMatch = instaCompanies.find((comp) => comp.name.toLowerCase().includes(searchTerm));
    const twitterCompanyMatch = twitterCompanies.find((comp) => comp.name.toLowerCase().includes(searchTerm));
  
    if (instaCompanyMatch) {
      setSelectedData({ data: instaData, source: 'instagram', company: searchTerm });
    } else if (twitterCompanyMatch) {
      setSelectedData({ data: twitterData, source: 'twitter' });
    } else {
      setSelectedData(null);
    }
    if(searchTerm.length === 0){
      setSelectedData(null)
    }
    {selectedData &&  setSentimentData(selectedData)}
  };

  
  console.log(selectedData)

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
    className="border-solid focus:border-black border-2 pl-8 pr-10 py-2 w-[500px] rounded"
    placeholder="Start typing in any topic/company name"
    value={searchText}
    onChange={handleSearch}
  />
  <div className="absolute right-2 top-3">
    <IoSearch className="text-gray-500" onClick={handleSearch}/>
  </div>
</div>
        
      </div>

{  }
    </div>
  );
};

export default SummaryHeader;
