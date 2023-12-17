import './App.css';
import IconBars from './components/IconBars.jsx';
import Insights from './components/Insights.jsx';
import SummaryHeader from './components/SummaryHeader.jsx'
import TableInfo from './components/TableInfo.jsx';



function App() {
  return (
    <div className="App flex flex-col w-full">
      <SummaryHeader />
      <Insights />
      <IconBars />
      <TableInfo />
    </div>
  );
}

export default App;
