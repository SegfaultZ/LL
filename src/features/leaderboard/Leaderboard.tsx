import { useAppSelector } from '../../app/hooks';
import { selectLowVoted, selectTopVoted } from '../quotes/quoteSlice';
import styles from './Leaderboard.module.scss';

const Leaderboard = () => {
    const topVoted = useAppSelector(selectTopVoted)
    const lowVoted = useAppSelector(selectLowVoted)
    console.log('top', topVoted)
    console.log('low', lowVoted)
    return (
        <div className={styles.container}>
            <div>Leaderboard:</div>
            <div>Top: {topVoted.map(item => <div>{item.quote}</div>)}</div>
            <div>Low: {lowVoted.map(item => <div>{item.quote}</div>)}</div>
        </div>
    )
}

export default Leaderboard
