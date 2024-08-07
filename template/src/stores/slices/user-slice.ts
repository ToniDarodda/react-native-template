import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthToken, User } from '../../types/user';

type UserState = {
  tokens: AuthToken | null;
  userInfo: User | null;
};

const initialState: UserState = {
  tokens: null,
  userInfo: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setTokens(state: UserState, action: PayloadAction<AuthToken | null>) {
      state.tokens = action.payload;
    },
    setUser(state: UserState, action: PayloadAction<User | null>) {
      state.userInfo = action.payload;
    },
    logoutUser(state: UserState) {
      state.tokens = null;
      state.userInfo = null;
    },
  },
});

export const { setTokens, setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
