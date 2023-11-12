import { createSlice } from '@reduxjs/toolkit'

export const favSlice = createSlice({
    name: 'fav',
    initialState: {
        favProducts: [],
    },

    reducers: {
        loadSlice: (state) => {
            const data = localStorage.getItem("fav")
            if (data) {
                const newData = JSON.parse(data)
                state.favProducts = newData.favProducts
            }
        },
        addProduct: (state, action) => {
            console.log(action.payload);
            state.favProducts = [...state.favProducts, action.payload]
            setFavtoLocalStorage(state)
        },
        removeProduct: (state, action) => {
            console.log(action.payload);
            state.favProducts = state.favProducts.filter((pr) => pr.id + pr.cat != action.payload.id + action.payload.cat)
            setFavtoLocalStorage(state)
        }
    }
})

const setFavtoLocalStorage = (state) => {
    localStorage.setItem("fav", JSON.stringify(state))
}

export const { addProduct, removeProduct, loadSlice } = favSlice.actions
export default favSlice.reducer