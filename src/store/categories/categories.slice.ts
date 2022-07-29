import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { CategoriesState, Category } from '../../types/categories.types';

const initialState: CategoriesState = {
    categories: [],
    isLoading: false,
    error: null
}

export const fetchCategories = createAsyncThunk<Category[], any, {rejectValue: Error}>(
    'categories/fetchCategories',
    async () => (await getCategoriesAndDocuments())
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
                state.error = action.error as Error
            })
    }
})

export default categoriesSlice.reducer