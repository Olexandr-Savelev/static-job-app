import { configureStore } from "@reduxjs/toolkit";
import FilterSlice from "./features/FilterSlice";
import OfferListSlice from "./features/OfferListSlice";

const store = configureStore({
    reducer: {
        offers: OfferListSlice,
        filters: FilterSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store