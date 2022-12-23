import { useEffect } from 'react';
import { useAppDispatch, useDebounce, useFetchQuotes } from '../../app/hooks';
import Quote from './Quote';
import styles from './QuoteList.module.scss';
import { setQuotes } from './quoteSlice';

const QuoteList = () => {
    const dispatch = useAppDispatch()
    const { input, setInput } = useDebounce()

    const {
        fetchQuotes,
        quotes,
    } = useFetchQuotes()
    
    useEffect(() => {
        const fromStorage = JSON.parse(localStorage.getItem('quotes') ?? '[]')

        if (fromStorage.length) {
            dispatch(setQuotes(fromStorage))
        } else {
            fetchQuotes()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])
    
    return (
        <div className={styles.list}>
            <div className={styles.searchInput}>
                <span>Filter the quotes:</span>
                <input value={input} onChange={(e) => { setInput(e.target.value)}} />
            </div>
            {quotes.map(q => <Quote key={`quote-${q.id}`} item={q} />)}
        </div>
    )
}

export default QuoteList
