import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { instaData } from '../Data/instaData';

const SentimentBar = () => {
  let sentimentScore = instaData.stats.instagram.timelineStats.timeline[0].meanSentiment;

  const getColor = () => {
    if (sentimentScore < -0.33) {
      return 'danger'; // Red
    } else if (sentimentScore <= 0.33) {
      return 'warning'; // Yellow
    } else {
      return 'success'; // Green
    }
  };
  const score =  Math.abs(sentimentScore)
  console.log(score * 100)

  return (
    <div className='min-w-full'>
      <span className='font-bold'>Sentiment </span>
      <ProgressBar now={score * 100} label={`${score.toFixed(2) * 100}%` } variant={getColor()} max={100}/>
    </div>
  );
};

export default SentimentBar;
