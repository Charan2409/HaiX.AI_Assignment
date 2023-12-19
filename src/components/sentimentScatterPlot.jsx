import React from 'react';
import Plot from 'react-plotly.js';

const SentimentScatterPlot = ({ data, source }) => {
  if (!data || !data.stats || !data.stats[source] || !data.stats[source].timelineStats) {
    return null;
  }

  const sentimentScores = data.stats[source].timelineStats.timeline.map(entry => entry.meanSentiment);
  const dates = data.stats[source].timelineStats.timeline.map(entry => entry.startDate);

  return (
    <Plot
      data={[
        {  
          x: dates,
          y: sentimentScores,
        
          type: "scatter",
          mode: 'markers',
          marker: { color: 'blue' },
        },
      ]}
      layout={{ width: 400, height: 400, title: `Sentiment Scores (${source})` , xaxis: {
        type: 'date',
        tickformat: '%Y-%m-%d',
      }}}
    />
  );
};

export default SentimentScatterPlot;
