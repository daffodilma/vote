import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { Button, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import Snackbars from "../../Helpers/SnackBar";

export default function VoterRegistration() {
  const [aadhar, setAadhar] = useState("");
  const [alert, setAlert] = useState("");
  const [alertName, setAlertName] = useState("");
  const [open, setOpen] = useState(false);
  const eVote = useSelector((state) => state.eVote.eVote);
  const account = useSelector((state) => state.account.account);
  const email = localStorage.getItem("email");
  const addAadhar = async () => {
    try {
      const res = await eVote.methods.usersList(email).call();
      const aadharRes = await eVote.methods.aadharList(aadhar).call();
      if (res.aadhar) {
        setAlert("warning");
        setAlertName("你已经验证过手机号了");
        setOpen(true);
        return;
      }
      if (aadharRes.accountAddress !== "") {
        setAlert("warning");
        setAlertName("手机号已被注册");
        setOpen(true);
        return;
      }
      await eVote.methods
        .createAdharEmail(aadhar, account, email)
        .send({ from: account });

      // window.location.reload();
    } catch (error) {
      // console.log(error.message);
    }
  };

  return (
    <div style={{ display: "flex", flex: 1 }}>
      <Paper style={paper} elevation={3}>
        <h3 style={text}>身份验证</h3>
        <div style={scanDiv}>
          <img
            alt="background"
            style={image}
            src="https://media4.giphy.com/media/Q7xOBMP7DcOdxSRAsi/200w.webp?cid=ecf05e47ixhwnkuiqwfq5nu707slp9gph0zts09dyoiimwlt&rid=200w.webp&ct=g"
          />
        </div>
        <br />
        <Divider style={{ width: "100%" }} />
        <br />
        <div style={numberDiv}>
          <h3 style={ head }>请输入手机号码 *</h3>
          <input
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
            style={input}
            placeholder="手机号"
          />
          <br />
          <Button onClick={addAadhar} variant="contained" style={button}>
            确认
          </Button>
        </div>
      </Paper>
      <Snackbars
        alertName={alertName}
        alert={alert}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
}
const paper = {
  backgroundColor: "white",
  width: "100%",
  height: "800px",
  display: "flex",
  flexDirection: "column",
  padding: 10,
  alignItems: "center",
};

const text = {
  color: "#2D493B",
  fontSize: 25,
  margin: 3,
};
const image = {
  height: 200,
  width: 200,
};
const scanDiv = {
  display: "flex",
  flexDirection: "row",
};
const input = {
  height: 50,
  fontSize: 16,
  borderRadius: 4,
  outline: "none",
  padding: 10,
  width: "40%",
  border: "1.5px solid #6B8E4E",
  margin: "0 auto"
};
const numberDiv = {
  display: "flex",
  flexDirection: "column",
  width: "80%",
};

const button = {
  backgroundColor: "#6b8e4e",
  width: "150px",
  height: "40px",
  margin: "0 auto"
}

const head = {
  width:"150px",
  height: "50px",
  margin: "0 auto"
}
