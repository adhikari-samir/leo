import { createSlice } from "@reduxjs/toolkit";

export const BTeamSlice = createSlice({
  name: "ScoreB",
  initialState: {
    value: 0,
  },
  reducers: {
    ScoreB: (state) => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { ScoreB } = BTeamSlice.actions;

export default BTeamSlice.reducer;
