import { FC } from 'react';
import { useAppDispatch } from '../../app/hooks';
import styles from './Quote.module.scss';
import { downvote, Quote as QuoteProps, upvote } from './quoteSlice';

interface Props {
    item: QuoteProps
}

const Quote: FC<Props> = ({ item }) => {
    const dispatch = useAppDispatch()

    const voteUp = (item: any) => {
        dispatch(upvote(item))
    }

    const voteDown = (item: any) => {
        dispatch(downvote(item))
    }

    return (
        <div className={styles.quote}>
            <button onClick={() => voteUp(item)}>Up</button>
            <button onClick={() => voteDown(item)}>Down</button>
            <div>{item.votes} - {item.quote}</div>
        </div>
    )
}

export default Quote
