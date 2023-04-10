import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import NoticeTable from "../../Helpers/NoticeTable";
export default function CandidateDetails() {
  const [info,setInfo] = useState('')
  const eVote = useSelector((state) => state.eVote.eVote);
  useEffect(() => {
    console.log(info)
    async function init(){
      const info = await eVote.methods.info().call();
      setInfo(info);
      
    }
    init();
  }, []);

  return (
    <div>
      <NoticeTable info={info} />
    </div>
  );
}
