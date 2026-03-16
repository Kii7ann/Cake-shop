import { configureStore } from '@reduxjs/toolkit'
import CakeSlice from './CakeSlice.jsx'

const Store = configureStore({
    reducer: {
        cake: CakeSlice,
    }
})

export default Store