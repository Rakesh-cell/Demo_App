import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type postsObject = {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
};
type postcomment = {
  postId?: number;
  id?: number;
  name?: string;
  email?: string;
  body?: string;
};
export type initial = {
  authToken: string;
  data: postsObject[];
  userdata: postcomment;
};
const initialState: initial = {
  authToken: null,
  data: [],
  userdata: {},
};

export const Reducers = createSlice({
  name: 'reducers',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.authToken = action.payload;
    },
    logout: state => {
      state.authToken = null;
    },
    posts: (state, {payload}: PayloadAction<postsObject[]>) => {
      state.data = payload;
    },
    default: state => {
      state = initialState;
    },
  },
});

export const {login, logout, posts} = Reducers.actions;

export default Reducers.reducer;
export type RootState = ReturnType<typeof Reducers.reducer>;


