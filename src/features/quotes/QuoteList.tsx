import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectQuotes, setQuotes } from './quoteSlice';

const QuoteList = () => {
    const dispatch = useAppDispatch()
    const quotes = useAppSelector(selectQuotes)

    useEffect(() => {
        const fetchQuotes = async () => {
            const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes/50')
            const quotes = await response.json()
            console.log('quotes', quotes)
            const quotesToStore = quotes.map((q: string) => ({ quote: q, votes: 0 }))
            dispatch(setQuotes(quotesToStore))
        }

        fetchQuotes()
    }, [dispatch])
    
    return (
        <>
            {quotes.map(q => <div>{q.votes} - {q.quote}</div>)}
        </>
    )
}

export default QuoteList
