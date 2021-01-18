import {createAsyncThunk, createSlice, nanoid} from '@reduxjs/toolkit';

import {dashboardAPI} from '../../services';

export const dashboardRequest = createAsyncThunk(
  'dashboard/getSummary',
  async (_arg, {getState, requestId, rejectWithValue}) => {
    const {currentRequestId, loading} = getState().dashboard;
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return;
    }

    try {
      const result = await dashboardAPI.getSummary(_arg);
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
  cCountries: [],
  currentRequestId: undefined,
  error: undefined,
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    searchByNameAction: (state, {payload}) => {
      if (!state.cCountries.length) state.cCountries = state.entities.Countries;
      if (!payload) state.entities.Countries = state.cCountries;

      state.entities.Countries =
        state?.cCountries?.filter(
          (item) =>
            parseInt(
              item?.Country?.toLowerCase()?.indexOf(payload?.toLowerCase()),
            ) !== -1,
        ) || [];

      return state;
    },
    sortByAction: (state, {payload}) => {
      switch (payload) {
        case 'rec':
          state.entities.Countries = state.entities.Countries.sort(
            (a, b) => Number(b.TotalRecovered) - Number(a.TotalRecovered),
          );
          break;
        case 'con':
          state.entities.Countries = state.entities.Countries.sort(
            (a, b) => Number(b.TotalConfirmed) - Number(a.TotalConfirmed),
          );
          break;
        case 'dth':
          state.entities.Countries = state.entities.Countries.sort(
            (a, b) => Number(b.TotalDeaths) - Number(a.TotalDeaths),
          );
          break;
        default:
          break;
      }

      return state;
    },
    resetAction: () => {
      return initialState;
    },
  },
  extraReducers: {
    [dashboardRequest.pending.type]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
        state.currentRequestId = action.meta.requestId;
      }
    },
    [dashboardRequest.fulfilled.type]: (state, action) => {
      const {requestId} = action.meta;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        state.entities = {
          ...action.payload.data,
          status: action.payload.status,
        };
        state.error = undefined;
        state.currentRequestId = undefined;
      }
    },
    [dashboardRequest.rejected.type]: (state, action) => {
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

// Dashboard actions
export const {
  resetAction,
  searchByNameAction,
  sortByAction,
} = dashboardSlice.actions;

// Dashboard selector
export const selectDashboard = (state) => state.dashboard;

export default dashboardSlice.reducer;
