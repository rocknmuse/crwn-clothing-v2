import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../root-reducer'
import { CategoriesMap } from '../../types/categories.types'

const selectCategoriesSlice = (state: RootState) => state.categories

export const selectCategories = createSelector(
    [selectCategoriesSlice],
    ({ categories }) => categories
)

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) =>
        categories.reduce((acc, category) => {
            const { title, items } = category
            acc[title.toLowerCase()] = items
            return acc
        }, {} as CategoriesMap)
)

export const selectIsLoading = createSelector(
    [selectCategoriesSlice],
    ({ isLoading }) => isLoading
)
