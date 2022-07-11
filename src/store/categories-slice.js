import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'

const initialState = {
    categories: [],
    isLoading: false,
    error: null
}

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        try {
            const categoriesArray = await getCategoriesAndDocuments(
                'categories'
            )
            return categoriesArray
        } catch (e) {
            return e
        }
    }
)

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.isLoading = false
                state.categories = action.payload
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export default categoriesSlice.reducer

const selectCategoriesSlice = (state) => state.categories

export const selectCategories = createSelector(
    [selectCategoriesSlice],
    ({categories}) => categories
)

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) =>
        categories.reduce((acc, category) => {
            const { title, items } = category
            acc[title.toLowerCase()] = items
            return acc
        }, {})
)

export const selectIsLoading = createSelector(
    [selectCategoriesSlice],
    ({ isLoading }) => isLoading
)
