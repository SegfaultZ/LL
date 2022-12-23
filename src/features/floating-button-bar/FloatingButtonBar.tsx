import { useState } from 'react';
import { useAppDispatch, useFetchQuotes } from '../../app/hooks';
import Button from '../../ui/Button';
import { resetCount } from '../quotes/quoteSlice';
import styles from './FloatingButtonBar.module.scss';

const FloatingButtonBar = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useAppDispatch()

    const { fetchQuotes } = useFetchQuotes()

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
        await fetchQuotes()

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
