import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recomend: null,
  newDisney: null,
  original: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {

  },
});

export default movieSlice.reducer;
