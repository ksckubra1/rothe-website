import { configureStore } from '@reduxjs/toolkit'
import basketSlice from './basketSlice'
import favSlice from './favSlice'

export const store = configureStore({
    reducer: {
        basket: basketSlice,
        fav: favSlice
    },
})


