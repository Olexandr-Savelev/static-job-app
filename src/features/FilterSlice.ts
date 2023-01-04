import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = []

const FilterSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers: {
        addFilter: (state, action) => { if (!state.includes(action.payload)) { return [...state, action.payload] } },
        removeFilter: (state, action) => (state.filter(filter => filter !== action.payload)),
        removeAllFilters: () => []
    }
})


export const { addFilter, removeFilter, removeAllFilters } = FilterSlice.actions
export default FilterSlice.reducer