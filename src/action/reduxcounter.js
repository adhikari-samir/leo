import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScoreA } from "../ATeamSlice";
import { ScoreB } from "../BTeamSlice";

export function Counter() {
  const countA = useSelector((state) => state.ScoreA.value);
  const countB = useSelector((state) => state.ScoreB.value);
  const dispatch = useDispatch();
  const handleScoreB = () => {
    dispatch(ScoreB());
    alert("sameer score");
  };
  return (
    <div>
      <div>
        <button aria-label="ShootA" onClick={() => dispatch(ScoreA())}>
          SHOOT
        </button>
        <span>GOAL{countA}</span>
        <br></br>
        <hr></hr>
        <button aria-label="ShootB" onClick={handleScoreB}>
          SHOOT
        </button>
        <span>GOAL{countB}</span>
      </div>
    </div>
  );
}
