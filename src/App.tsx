import styles from './App.module.scss';
import FloatingButtonBar from './features/floating-button-bar/FloatingButtonBar';
import Leaderboard from './features/leaderboard/Leaderboard';
import QuoteList from './features/quotes/QuoteList';

function App() {
  return (
    <div className={styles.app}>
      { /* Add link variant and link to API used */ }
      { /* Add a disabled button style and use it somewhere */ }
      { /* clean up responsiveness for long items at small view ports */ }
      <Leaderboard />
      { /* Add search bar with debounce to filter quotes */ }
      <div className={styles.content}>
        <QuoteList />
      </div>
      <FloatingButtonBar />
    </div>
  );
}

export default App;
