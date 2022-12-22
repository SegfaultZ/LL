import { useAppSelector } from '../../app/hooks';
import { selectLowVoted, selectTopVoted } from '../quotes/quoteSlice';

const Leaderboard = () => {
    const topVoted = useAppSelector(selectTopVoted)
    const lowVoted = useAppSelector(selectLowVoted)
    console.log('top', topVoted)
    console.log('low', lowVoted)
    return (
        <>
            leaders:
            Top: {topVoted.map(item => <div>{item.quote}</div>)}
            Low: {lowVoted.map(item => <div>{item.quote}</div>)}
        </>
    )
}

export default Leaderboard
