import { createSlice } from "@reduxjs/toolkit";

const CakeSlice = createSlice({
    name: 'Cake',
    initialState: [],
    reducers: {
        addCake: (state, action) => {
            const item = state.find(i => i.id === action.payload.id)
            if (item) {
                item.qty += 1
            } else {
                state.push({ ...action.payload, qty: 1 })
            }
        },
        increaseQty: (state, action) => {
            const item = state.find(i => i.id === action.payload)

            if (item) {
                item.qty += 1
            }
        },
        decreaseQty: (state, action) => {
            const item = state.find(i => i.id === action.payload)

            if (item && item.qty > 1) {
                item.qty -= 1
            }
        }

    }
})

export const { addCake, increaseQty, decreaseQty } = CakeSlice.actions

export default CakeSlice.reducer