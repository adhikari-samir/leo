import { createSlice } from "@reduxjs/toolkit";

export const ATeamSlice = createSlice({
  name: "ScoreA",
  initialState: {
    value: 0,
  },
  reducers: {
    ScoreA: (state) => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { ScoreA } = ATeamSlice.actions;

export default ATeamSlice.reducer;
