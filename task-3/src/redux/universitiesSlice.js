import { createSlice } from '@reduxjs/toolkit';

const universitiesSlice = createSlice({
  name: 'universities',
  initialState: {
    country: '',
    universities: [],
    error: null,
  },
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setUniversities: (state, action) => {
      state.universities = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.universities = [];
    },
    reset: (state) => {
      state.country = '';
      state.universities = [];
      state.error = null;
    },
  },
});

export const { setCountry, setUniversities, setError, reset } = universitiesSlice.actions;
export default universitiesSlice.reducer;
