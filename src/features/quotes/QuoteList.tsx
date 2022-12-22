import { useEffect } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Quote from './Quote';
import styles from './QuoteList.module.scss';
import { selectQuotes, setQuotes } from './quoteSlice';

const QuoteList = () => {
    const dispatch = useAppDispatch()
    const quotes = useAppSelector(selectQuotes)
    
    useEffect(() => {
        const fromStorage = localStorage.getItem('quotes') ?? '[]'

        const fetchQuotes = async () => {
            const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes/50')
            const quotes = await response.json()
            const quotesToStore = quotes.map((q: string) => ({ id: uuidV4(), quote: q, votes: 0 }))
            dispatch(setQuotes(quotesToStore))
        }

        if (fromStorage.length) {
            dispatch(setQuotes(JSON.parse(fromStorage)))
        } else {
            fetchQuotes()
        }
    }, [dispatch])
    
    return (
        <div className={styles.list}>
            {quotes.map(q => <Quote item={q} />)}
        </div>
    )
}

export default QuoteList
