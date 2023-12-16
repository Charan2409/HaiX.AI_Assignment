import { IoSearch } from "react-icons/io5";

const SummaryHeader = () => {
    return(
        <div className="min-w-full">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 m-2 rounded-md">HaiX.AI</button>
            <h1 className="text-xl text-black text-center font-bold py-3">Stay ahead with Real-Time Insights</h1>
            <div className="flex justify-center py-2 my-2">
            <div className="relative">
    <input
      type="search"
      className="border-solid border-black border-2 pl-8 pr-4 w-[500px]" 
      placeholder="Start typing in any topic/company name"
    />
    <IoSearch className="absolute left-2 top-2 text-gray-500" />
  </div>
</div>
            

        </div>
    )
}

export default SummaryHeader;