import styles from './App.module.scss';
import Leaderboard from './features/leaderboard/Leaderboard';
import QuoteList from './features/quotes/QuoteList';

function App() {
  return (
    <div className={styles.app}>
      <Leaderboard />
      <QuoteList />
    </div>
  );
}

export default App;
