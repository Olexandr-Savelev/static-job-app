import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = require('../data.json')

const OfferListSlice = createSlice({
    name: 'offerList',
    initialState,
    reducers: {}
})

export const selectVisibleOffers = (state: RootState, filters: string[]) => {
    if (filters.length === 0) return state.offers;
    let visibleOffers: string[] = []

    const allOffers = state.offers;

    allOffers.map((offer: any) => {
        const tags = offer.languages.concat(offer.tools);
        const containesAllTags = filters.every((filter: string) => tags.includes(filter))
        if (containesAllTags) {
            visibleOffers.push(offer)
        }
    })

    return visibleOffers
}

export default OfferListSlice.reducer