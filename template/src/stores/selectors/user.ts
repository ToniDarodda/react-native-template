import { RootState } from '../store';

export const isAuthenticated = (state: RootState) => state.user.tokens !== null;

export const userTokens = (state: RootState) => state.user.tokens;

export const userInfo = (state: RootState) => state.user.userInfo;
