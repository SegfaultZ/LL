import styles from './App.module.scss';
import Leaderboard from './features/leaderboard/Leaderboard';
import QuoteList from './features/quotes/QuoteList';

function App() {
  return (
    <div className={styles.app}>
      { /* Add button component, with variants */ }
      { /* Add button to reset counts */ }
      <Leaderboard />
      { /* Add search bar with debounce to filter quotes */ }
      <div className={styles.content}>
        <QuoteList />
      </div>
    </div>
  );
}

export default App;
