import { configureStore } from '@reduxjs/toolkit';

import { books } from './book-slice';
import { categories } from './categories-slice';
import { description } from './description-slice';
import { loader } from './loader-slice';

export const store = configureStore({
  reducer: { books, categories, description, loader },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
