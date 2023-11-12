import { createSlice } from '@reduxjs/toolkit'


export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        products: [],
    },
    reducers: {
        loadSlice: (state) => {
            const data = localStorage.getItem("basket")
            // console.log(data);
            if (data) {
                const newState = JSON.parse(data)
                state.products = newState.products
            }
        },
        addProduct: (state, action) => {
            console.log(action.payload);
            state.products = [...state.products, action.payload]
            setBasketLocalStorage(state)
        },
        removeProduct: (state, action) => {
            console.log(action.payload);
            state.products = state.products.filter((_, index) => index != action.payload)
            setBasketLocalStorage(state)
        }
    }
})

const setBasketLocalStorage = (state) => {
    localStorage.setItem("basket", JSON.stringify(state))
}

export const { addProduct, removeProduct, loadSlice } = basketSlice.actions
export default basketSlice.reducer