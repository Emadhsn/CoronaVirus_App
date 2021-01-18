import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loaderState: 'idle',
};

export const loaderLockSlice = createSlice({
  name: 'loaderLock',
  initialState,
  reducers: {
    loaderLockAction(state, action) {
      state.loaderState = action.payload;

      return state;
    },
  },
});

export const {loaderLockAction} = loaderLockSlice.actions;

// Loader selector
export const selectLoaderLock = (state) => state.loaderLock;

export default loaderLockSlice.reducer;
