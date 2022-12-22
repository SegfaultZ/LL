import { useEffect } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { downvote, selectQuotes, setQuotes, upvote } from './quoteSlice';

const QuoteList = () => {
    const dispatch = useAppDispatch()
    const quotes = useAppSelector(selectQuotes)

    const voteUp = (item: any) => {
        dispatch(upvote(item))
    }

    const voteDown = (item: any) => {
        dispatch(downvote(item))
    }
    
    useEffect(() => {
        const fetchQuotes = async () => {
            const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes/50')
            const quotes = await response.json()
            console.log('quotes', quotes)
            const quotesToStore = quotes.map((q: string) => ({ id: uuidV4(), quote: q, votes: 0 }))
            dispatch(setQuotes(quotesToStore))
        }

        fetchQuotes()
    }, [dispatch])
    
    return (
        <>
            {quotes.map(q => (
                <div>
                    <button onClick={() => voteUp(q)}>Up</button>
                    <button onClick={() => voteDown(q)}>Down</button>
                    <div>{q.votes} - {q.quote}</div>
                </div>
            ))}
        </>
    )
}

export default QuoteList
