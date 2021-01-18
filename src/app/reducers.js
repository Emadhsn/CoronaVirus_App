import {combineReducers} from '@reduxjs/toolkit';

// Reducers
import loaderLockReducer from '../features/loaderLock/loaderLockSlice';
import DashboardReducer from '../features/dashboard/dashboardSlice';
import CountryReducer from '../features/countries/countrySlice';

const reducers = combineReducers({
  loaderLock: loaderLockReducer,
  dashboard: DashboardReducer,
  country: CountryReducer,
});

export default reducers;
