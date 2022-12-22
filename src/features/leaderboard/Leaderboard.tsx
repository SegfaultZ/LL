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
            <div>
                <div>Top Voted:</div>
                <div className={styles.list}>{topVoted.map((item, idx) => <div>{idx + 1}. {item.quote}</div>)}</div>
            </div>
            <div>
                <div>Low Voted:</div>
                <div className={styles.list}>{lowVoted.map((item, idx) => <div>{idx + 1}. {item.quote}</div>)}</div>
            </div>
        </div>
    )
}

export default Leaderboard
