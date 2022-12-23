import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { filterQuotes, selectQuotes, setQuotes } from '../features/quotes/quoteSlice';
import type { RootState, AppDispatch } from './store';
import { v4 as uuidV4 } from 'uuid';
import { useEffect, useState } from 'react';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export const useFetchQuotes = () => {
    const dispatch = useAppDispatch()
    const quotes = useAppSelector(selectQuotes)

    const fetchQuotes = async () => {
        const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes/50')
        const quotes = await response.json()
        const quotesToStore = quotes.map((q: string) => ({ id: uuidV4(), quote: q, votes: 0 }))
        dispatch(setQuotes(quotesToStore))
    }

    return {
        fetchQuotes,
        quotes,
    }
}


export const useDebounce = () => {
    const [inputVal, setInputVal] = useState('')
    const dispatch = useAppDispatch()
    const [isSetting, setIsSetting] = useState(false)
    const [trigger, setTrigger] = useState(false)

    const setInput = (value: string) => {
        setInputVal(value)
        if (!isSetting) {
            setTimeout(() => {
                setTrigger(true)
            }, 1000)
            setIsSetting(true)
        }
    }

    useEffect(() => {
        if (trigger) {
            dispatch(filterQuotes(inputVal))
            setTrigger(false)
            setIsSetting(false)
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trigger])

    return {
        input: inputVal,
        setInput
    }
}