import {createAsyncThunk, createSlice, nanoid} from '@reduxjs/toolkit';

import {countryAPI} from '../../services';

export const countryRequest = createAsyncThunk(
  'Countries/total/country',
  async (_arg, {getState, requestId, rejectWithValue}) => {
    const {currentRequestId, loading} = getState().country;
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return;
    }

    try {
      const result = await countryAPI.getCountryDetails(_arg);
      return result;
    } catch (err) {
      const {status, data} = err.response;
      return rejectWithValue({status, message: data, id: nanoid()});
    }
  },
);

const initialState = {
  loading: 'idle',
  entities: [],
  currentRequestId: undefined,
  error: undefined,
};

export const countriesSlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    resetAction: () => {
      return initialState;
    },
  },
  extraReducers: {
    [countryRequest.pending.type]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
        state.currentRequestId = action.meta.requestId;
      }
    },
    [countryRequest.fulfilled.type]: (state, action) => {
      const {requestId} = action.meta;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        state.entities = {
          data: action.payload.data,
          status: action.payload.status,
        };
        state.error = undefined;
        state.currentRequestId = undefined;
      }
    },
    [countryRequest.rejected.type]: (state, action) => {
      const {requestId} = action.meta;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        state.error = action.payload.message;
        state.entities = undefined;
        state.currentRequestId = undefined;
      }
    },
  },
});

// Country actions
export const {resetAction} = countriesSlice.actions;

// Country selector
export const selectCountry = (state) => state.country;

export default countriesSlice.reducer;
