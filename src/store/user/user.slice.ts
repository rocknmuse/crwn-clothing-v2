import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../root-reducer';
import { UserState } from './user.types';

const initialState: UserState = {
    currentUser: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        }
    }
})

export const selectCurrentUser = (state: RootState) => state.user.currentUser;

export const { setCurrentUser } = userSlice.actions
export default userSlice.reducer
