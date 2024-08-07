import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthToken } from '../types/user';

type UserState = {
  user: AuthToken | null;
};

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<AuthToken>) {
      state.user = action.payload;
    },
    logoutUser(state) {
      state.user = null;
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
