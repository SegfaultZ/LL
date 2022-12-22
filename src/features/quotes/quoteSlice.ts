import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type Quote = {
  id: string
  quote: string
  votes: number
}

export interface QuoteState {
  list: Quote[]
}

const initialState: QuoteState = {
  list: []
}

export const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    upvote: (state, action: PayloadAction<Quote>) => {
      state.list = [...state.list].map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, votes: item.votes + 1 }
        }

        return item
      })

      localStorage.setItem('quotes', JSON.stringify(state.list))
    },
    downvote: (state, action: PayloadAction<Quote>) => {
      state.list = [...state.list].map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, votes: item.votes - 1 }
        }

        return item
      })

      localStorage.setItem('quotes', JSON.stringify(state.list))
    },
    setQuotes: (state, action: PayloadAction<Quote[]>) => {
      state.list = action.payload
      localStorage.setItem('quotes', JSON.stringify(state.list))
    },
  },
})

export const { upvote, downvote, setQuotes } = quotesSlice.actions

export const selectQuotes = (state: RootState) => state.quotes.list
export const selectTopVoted = (state: RootState) => [...state.quotes.list].sort((a: Quote, b: Quote) => {
  const bVotes = b.votes
  const aVotes = a.votes
  if (bVotes > aVotes) return 1
  if (aVotes > bVotes) return -1
  return 1
}).slice(0, 3)

export const selectLowVoted = (state: RootState) => [...state.quotes.list].sort((a: Quote, b: Quote) => {
  const bVotes = b.votes
  const aVotes = a.votes
  if (bVotes > aVotes) return -1
  if (aVotes > bVotes) return 1
  return -1
}).slice(0, 3)

export default quotesSlice.reducer
