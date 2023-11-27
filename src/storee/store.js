import { configureStore } from "@reduxjs/toolkit";
import ATeamReducer from "../ATeamSlice";
import BTeamReducer from "../BTeamSlice";

export default configureStore({
  reducer: { ScoreA: ATeamReducer, ScoreB: BTeamReducer },
});
