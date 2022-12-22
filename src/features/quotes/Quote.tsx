import cx from 'classnames';
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

    return (
        <div className={styles.quote}>
            <div className={styles.voteButtons}>
                <Button label={'arrow_drop_up'}  onClick={() => voteUp(item)} showIcon />
                <Button label={'arrow_drop_down'}  onClick={() => voteDown(item)} showIcon />
            </div>
            <div>{item.votes} - {item.quote}</div>
        </div>
    )
}

export default Quote
