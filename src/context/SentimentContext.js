// SentimentContext.js
import React, { createContext, useContext, useState } from 'react';

const SentimentContext = createContext();

export const SentimentProvider = ({ children }) => {
  const [selectedData, setSelectedData] = useState(null);

  const setSentimentData = (data) => {
    setSelectedData(data);
  };

  return (
    <SentimentContext.Provider value={{ selectedData, setSentimentData }}>
      {children}
    </SentimentContext.Provider>
  );
};

export const useSentimentContext = () => {
  const context = useContext(SentimentContext);
  return context;
};
