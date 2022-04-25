import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        inputValue: [],
        selectedCountry: ""
    },
    reducers: {
        addSearchResult: (state, action) => {
            state.inputValue.push(action.payload)
        },
        setCountry: (state, action) => {
            state.selectedCountry = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { addSearchResult, setCountry } = searchSlice.actions

export default searchSlice.reducer