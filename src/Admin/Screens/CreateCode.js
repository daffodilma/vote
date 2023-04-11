import React, { useState } from "react";
import { useSelector } from "react-redux";
import CodeTable from "../../Helpers/CodeTable"
import { Button } from "@mui/material";
export default function GenerateKey() {
  const [userKey,setUserkey] = useState('')
  const account = useSelector((state) => state.account.account);
  const eVote = useSelector((state) => state.eVote.eVote);

  async function init(){
    const userKey = await eVote.methods?.userKey().call();
    console.log(userKey);
    setUserkey(userKey);
  }
  const generateKey = async () => {
    try {
      await eVote.methods.generateKey()
      .send({ from: account });
      init();
    } catch (error) {
      alert(error.message);
    }}




  return (
    <div>
      <CodeTable userKey={userKey} />
      <Button
            onClick={() => {
              generateKey()
            }}
            style={button}
            variant="contained"
          >
              生成密钥
          </Button>
    </div>
            
  );
            }
const button = {
  width: "50%",
  display: "flex",
  borderRadius: 20,
  alignItems: "center",
  margin: "0 auto",
  marginTop: 10,
  height: 43,
  backgroundColor: "#6b8e4e",
  "@media (maxWidth: 500px)": {},
};