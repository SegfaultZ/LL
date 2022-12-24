import styles from './App.module.scss';
import FloatingButtonBar from './features/floating-button-bar/FloatingButtonBar';
import Leaderboard from './features/leaderboard/Leaderboard';
import QuoteList from './features/quotes/QuoteList';

function App() {
  return (
    <div className={styles.app}>
      <Leaderboard />
      <div className={styles.content}>
        <QuoteList />
      </div>
      <FloatingButtonBar />
    </div>
  );
}

export default App;
