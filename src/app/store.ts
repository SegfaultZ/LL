import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import quotesReducer from '../features/quotes/quoteSlice';

export const store = configureStore({
  reducer: {
    quotes: quotesReducer,
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
