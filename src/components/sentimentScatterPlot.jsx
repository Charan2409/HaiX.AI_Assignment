import React from 'react';
import Plot from 'react-plotly.js';

const SentimentScatterPlot = ({ data, source }) => {
  const sentimentScores = data.stats[source].timelineStats.timeline.map(entry => entry.meanSentiment);

  return (
    <Plot
      data={[
        {
          x: sentimentScores,
          type: 'scatter',
          mode: 'markers',
          marker: { color: 'blue' },
        },
      ]}
      layout={{ width: 500, height: 400, title: `Sentiment Scores (${source})` }}
    />
  );
};

export default SentimentScatterPlot;
