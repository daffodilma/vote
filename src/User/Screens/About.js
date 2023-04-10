import React, { useState } from "react";
import { useSelector } from "react-redux";
import NoticeTable from "../../Helpers/NoticeTable";
export default function CandidateDetails() {
  const [info,setInfo] = useState('')
  const eVote = useSelector((state) => state.eVote.eVote);

  async function init(){
    const info = await eVote.methods?.info().call();
    setInfo(info);
  }
    // 在组件挂载后运行一次 `init` 函数
  init();

  // useEffect(() => {
  //   console.log(info)
  //   async function init(){
  //     const info = await eVote.methods?.info().call();
  //     setInfo(info);
  //   }
  //   init();
  // }, []);

  return (
    <div>
      <NoticeTable info={info} />
    </div>
  );
}
