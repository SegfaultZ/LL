import cx from 'classnames';
import { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectLowVoted, selectTopVoted } from '../quotes/quoteSlice';
import styles from './Leaderboard.module.scss';

const Leaderboard = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const topVoted = useAppSelector(selectTopVoted)
    const lowVoted = useAppSelector(selectLowVoted)

    const toggleLeaderboard = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className={cx(styles.wrapper, { [styles.collapsed]: !isExpanded })}>
            <div className={cx(styles.container, { [styles.collapsed]: !isExpanded })}>
                <div className={styles.section}>
                    <div className={styles.title}>Top Voted:</div>
                    <div className={styles.list}>
                        {!topVoted.length && <div className={styles.placeholder}>No quotes have been upvoted.</div>}
                        {topVoted.map((item, idx) => (
                            <div key={`top-${item.id}`} className={styles.listItem}>
                                {idx + 1}. {item.quote}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.title}>Low Voted:</div>
                    <div className={styles.list}>
                        {!lowVoted.length && <div className={styles.placeholder}>No quotes have been downvoted.</div>}
                        {lowVoted.map((item, idx) => (
                            <div key={`bottom-${item.id}`} className={styles.listItem}>{idx + 1}. {item.quote}</div>
                        ))}
                    </div>
                </div>
            </div>
            <button
                onClick={toggleLeaderboard}
                className={styles.expander}
            >
                <div>{isExpanded ? 'Hide' : 'Show'} Leaderboard</div>
                <div className='material-icons'>
                    {isExpanded ? 'expand_less' : 'expand_more'}
                </div>
            </button>
        </div>
    )
}

export default Leaderboard
