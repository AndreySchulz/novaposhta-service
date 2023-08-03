import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://api.novaposhta.ua/v2.0/json/';

export const fetchInfo = createAsyncThunk(
  'info/fetchInfo',

  async (number, thunkAPI) => {
    const data = {
      apiKey: process.env.REACT_APP_API_KEY,
      modelName: 'TrackingDocument',
      calledMethod: 'getStatusDocuments',
      methodProperties: {
        Documents: [
          {
            DocumentNumber: number,
          },
        ],
      },
    };
    try {
      const response = await axios.post('', data);
      if (response.data.success) {
        return response.data.data[0];
      } else {
        return thunkAPI.rejectWithValue(response.data.errors);
      }
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchDepartments = createAsyncThunk(
  'department/fetchDepartment',

  async ({ city, page }, thunkAPI) => {
    const data = {
      apiKey: process.env.REACT_APP_API_KEY,
      modelName: 'Address',
      calledMethod: 'getWarehouses',
      methodProperties: {
        CityName: city,
        Page: page,
        Limit: '20',
        Language: 'UA',
      },
    };
    try {
      const response = await axios.post('', data);

      if (response.data.data.length) {
        return {
          data: response.data.data,
          totalCount: response.data.info.totalCount,
        };
      } else {
        return thunkAPI.rejectWithValue('Такого міста немає у списку');
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);