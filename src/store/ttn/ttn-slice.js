import { createSlice } from '@reduxjs/toolkit';
import { fetchDepartments, fetchInfo } from './ttn-operation';

const initialState = {
  ttnInfo: {},
  ttnNumbersList: [],
  departmentsList: [],
  infoError: false,
  departmentsError: false,
  isLoading: false,
  totalCount: 0,
};

const infoSlice = createSlice({
  name: 'info',
  initialState: initialState,
  reducers: {
    clearRequestHistory(state, action) {
      state.ttnNumbersList = [];
    },
  },
  extraReducers: {
    [fetchInfo.pending](state, action) {
      state.infoError = false;
      state.isLoading = true;
      state.ttnInfo = {};
    },
    [fetchInfo.fulfilled](state, action) {
      state.ttnInfo = action.payload;
      state.isLoading = false;
      const currentTtnNumber = action.payload.Number;
      if (!state.ttnNumbersList.includes(currentTtnNumber)) {
        state.ttnNumbersList.push(currentTtnNumber);
      }
    },
    [fetchInfo.rejected](state, action) {
      state.isLoading = false;
      state.infoError = action.payload[0];
    },
    [fetchDepartments.pending](state, action) {
      state.isLoading = true;
      state.departmentsList = [];
    },
    [fetchDepartments.fulfilled](state, action) {
      state.departmentsList = action.payload.data;
      
      state.totalCount = action.payload.totalCount;
      state.departmentsError = false;
      state.isLoading = false;
    },
    [fetchDepartments.rejected](state, action) {
      state.isLoading = false;
      state.departmentsError = true;
    },
  },
});

export const {
  clearRequestHistory,
} = infoSlice.actions;

export const infoReducer = infoSlice.reducer;
