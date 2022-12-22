import { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { useAppDispatch } from '../../app/hooks';
import Button from '../../ui/Button';
import { resetCount, setQuotes } from '../quotes/quoteSlice';
import styles from './FloatingButtonBar.module.scss';

const FloatingButtonBar = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useAppDispatch()

    const resetVoteCounts = async () => {
        setLoading(true)
        await dispatch(resetCount())
    }

    const refetchQuotes = async () => {
        const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes/50')
        const quotes = await response.json()
        console.log('quotes', quotes)
        const quotesToStore = quotes.map((q: string) => ({ id: uuidV4(), quote: q, votes: 0 }))
        dispatch(setQuotes(quotesToStore))
    
    }

    return (
        <div className={styles.bar}>
            <Button label='Reset Counts' variant='secondary' size='lg' onClick={resetVoteCounts} loading={loading} />
            <Button label='Refetch Quotes' variant='secondary' size='lg' onClick={refetchQuotes} loading={loading} />
        </div>
    )
}

export default FloatingButtonBar
