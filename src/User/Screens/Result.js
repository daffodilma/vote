import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CandidateTable from "../../Helpers/CandidatesTable";
import { getCandidates } from "../../Helpers/getData";
import Confetti from "react-confetti";
import CandidatesEmptyPage from "../Components/EmptyPages";
import WinnerCard from "../../Helpers/WinnerCard";
export default function Result() {
  const dispatch = useDispatch();
  const [state, setState] = useState("");
  const eVote = useSelector((state) => state.eVote.eVote);
  const winner = useSelector((state) => state.winnerData.winnerData);
  const candidatesList = useSelector(
    (state) => state.candidates.candidatesList
  );

  useEffect(() => {
    getCandidates(dispatch, eVote);
  }, [dispatch, eVote]);
  const getState = async () => {
    try {
      const st = await eVote.methods.changeState().call();
      // dispatch(changeStateAction(st));
      setState(st);
    } catch (error) {
      //alert(error.message)
    }
  };
  useEffect(() => {
    getState();
  });

  if (state === "Result") {
    return (
      <div style={rootDiv}>
        <Confetti />
        <h2>Winner!</h2>
        <WinnerCard
          image={
            "http://121.5.78.68:83/speech.png"
          }
          partyName={winner.partyName}
          votes={winner.votes}
        />
        <br />
        <br />
        <CandidateTable candidatesList={candidatesList} />
      </div>
    );
  } else {
    return (
      <div>
        <CandidatesEmptyPage
          image={
            "http://121.5.78.68:83/voting.png"
          }
          header={"目前无法查看结果"}
        />
      </div>
    );
  }
}
const rootDiv = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
};
