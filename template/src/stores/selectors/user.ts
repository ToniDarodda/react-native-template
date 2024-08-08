import { RootState } from '../store';

export const isAuthenticated = (state: RootState) => state.user.tokens !== null && !!state.user.tokens.access_token && !!state.user.tokens.refresh_token;

export const userTokens = (state: RootState) => state.user.tokens;

export const userInfo = (state: RootState) => state.user.userInfo;
