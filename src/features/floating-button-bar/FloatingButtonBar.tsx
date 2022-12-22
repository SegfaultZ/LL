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

        // Timeouts are being used to give the appearance that it's still loading so you can see the loading button
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    const refetchQuotes = async () => {
        setLoading(true)
        const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes/50')
        const quotes = await response.json()
        const quotesToStore = quotes.map((q: string) => ({ id: uuidV4(), quote: q, votes: 0 }))
        dispatch(setQuotes(quotesToStore))

        // Timeouts are being used to give the appearance that it's still loading so you can see the loading button
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    
    }

    const goToAPI = () => {
        window.location.href = 'https://github.com/jamesseanwright/ron-swanson-quotes';
    }

    return (
        <div className={styles.bar}>
            <div className={styles.actions}>
                <Button label='Reset Counts' color='secondary' size='lg' onClick={resetVoteCounts} loading={loading} />
                <Button label='Refetch Quotes' color='secondary' size='lg' onClick={refetchQuotes} loading={loading} />
            </div>
            <Button label='Ron Swanson Quote API' color='secondary' onClick={goToAPI} variant='link' />
        </div>
    )
}

export default FloatingButtonBar
