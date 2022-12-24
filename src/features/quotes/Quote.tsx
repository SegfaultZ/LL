import { FC } from 'react';
import { useAppDispatch } from '../../app/hooks';
import Button from '../../ui/Button';
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

    const renderVoteCount = (count: number) => {
        if (Math.abs(count) > 999) {
            const asDecimal = Math.abs(count)/1000
            return `${Math.sign(count)*(asDecimal.toFixed(1) as any)}k`
        } 
        
        return Math.sign(count) * Math.abs(count)
    }

    return (
        <div className={styles.quoteContainer}>
            <div className={styles.voteButtons}>
                <Button
                    label={'arrow_drop_up'}
                    onClick={() => voteUp(item)}
                    size='sm'
                    variant='icon'
                />
                <Button
                    label={'arrow_drop_down'}
                    onClick={() => voteDown(item)}
                    color='danger'
                    size='sm'
                    variant='icon'
                />
            </div>
            <div className={styles.count}>{renderVoteCount(item.votes)}</div>
            <div className={styles.quote}>{item.quote}</div>
        </div>
    )
}

export default Quote
