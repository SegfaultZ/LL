import './App.css';
import Leaderboard from './features/leaderboard/Leaderboard';
import QuoteList from './features/quotes/QuoteList';

function App() {
  return (
    <div className="App">
      <Leaderboard />
      <QuoteList />
    </div>
  );
}

export default App;
