import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const SentimentBar = ({ sentimentScore, label }) => {
  const getColor = () => {
    if (sentimentScore < -0.33) {
      return 'danger'; // Red
    } else if (sentimentScore <= 0.33) {
      return 'warning'; // Yellow
    } else {
      return 'success'; // Green
    }
  };

  const score = Math.abs(sentimentScore);

  return (
    <div className='min-w-full'>
      <span className='font-bold'>{label}</span>
      <ProgressBar now={score * 100} label={`${(score * 100).toFixed(2)}%`} variant={getColor()} max={100} />
    </div>
  );
};

export default SentimentBar;
