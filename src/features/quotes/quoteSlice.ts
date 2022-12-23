import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type Quote = {
  id: string
  quote: string
  votes: number
}

export interface QuoteState {
  list: Quote[]
  searchTerm: string
}

const initialState: QuoteState = {
  list: [],
  searchTerm: ''
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
    resetCount: (state) => {
      state.list = [...state.list].map((item) => ({ ...item, votes: 0 }))
    },
    filterQuotes: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    }
  },
})

export const { upvote, downvote, setQuotes, resetCount, filterQuotes } = quotesSlice.actions

export const selectQuotes = (state: RootState) => [...state.quotes.list].filter((item) => (item.quote.includes(state.quotes.searchTerm)))
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
