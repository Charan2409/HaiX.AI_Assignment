import './App.css';
import IconBars from './components/IconBars.jsx';
import Insights from './components/Insights.jsx';
import SummaryHeader from './components/SummaryHeader.jsx';
import TableInfo from './components/TableInfo.jsx';
import { SentimentProvider } from './context/SentimentContext.js';

function App() {
  return (
    <SentimentProvider>
      <div className="App flex flex-col w-full">
        <SummaryHeader />
        <IconBars />
        <Insights />
        <TableInfo />
      </div>
    </SentimentProvider>
  );
}

export default App;
