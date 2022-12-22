import styles from './App.module.scss';
import Leaderboard from './features/leaderboard/Leaderboard';
import QuoteList from './features/quotes/QuoteList';

function App() {
  return (
    <div className={styles.app}>
      { /* Add button component, with variants */ }
      { /* Add button to reset counts */ }
      { /*  Make leaderboard fixed to top and collapsible */}
      <Leaderboard />
      { /* Add search bar with debounce to filter quotes */ }
      <QuoteList />
      { /* Maybe store state of list in localstorage so that it can persist over sessions */ }
    </div>
  );
}

export default App;
