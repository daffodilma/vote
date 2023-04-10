import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";
import Snackbars from "../../Helpers/SnackBar";

export default function AddCandidate() {
  const account = useSelector((state) => state.account.account);
  const eVote = useSelector((state) => state.eVote.eVote);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [party, setParty] = useState("");
  const [qualification, setQualification] = useState("");
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState("");
  const [alertName, setAlertName] = useState("");
  const [alert, setAlert] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setAlertName("Please fill all details");
    setAlert("warning");
    setOpen(true);
  };
  const addCandidates = async () => {
    setLoading(true);
    try {
      await eVote.methods
        .createCandidate(name, age, party, qualification)
        .send({ from: account });
      setAlertName("添加成功");
      setAlert("success");
      setOpen(true);
    } catch (error) {
      setAlertName("添加失败，请重新添加");
      setAlert("error");
    }

    setLoading(false);
    setName("");
    setAge("");
    setParty("");
    setQualification("");
  };
  const getState = async () => {
    try {
      const st = await eVote.methods.changeState().call();
      setState(st);
    } catch (error) {}
  };
  useEffect(() => {
    getState();
  });

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        height: "80vh"
      }}
    >

      <Paper style={paper} elevation={3}>
      <h2 style={tit}>添加候选人</h2>
        <h3 style={labels}>
          姓名 <span style={{ color: "red" }}>*</span>
        </h3>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputs}
          placeholder="姓名"
        />
        <h3 style={labels}>
          年龄 <span style={{ color: "red" }}>*</span>
        </h3>
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={inputs}
          placeholder="年龄"
        />
        <h3 style={labels}>
          组织 <span style={{ color: "red" }}>*</span>
        </h3>
        <input
          value={party}
          onChange={(e) => setParty(e.target.value)}
          style={inputs}
          placeholder="组织"
        />

        <h3 style={labels}>
          介绍 <span style={{ color: "red" }}>*</span>
        </h3>
        <input
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
          style={inputs}
          placeholder="介绍"
        />
        <br />
        <Button
          onClick={() => {
            if (!name || !age || !party || !qualification) {
              handleClick();
            } else if (state === "Registration" && !loading) {
              addCandidates();
            } else if (loading) {
              setAlertName("请等待交易完成");
              setAlert("warning");
              setOpen(true);
            } else {
              setAlertName("请先改变投票阶段再操作");
              setAlert("warning");
              setOpen(true);
            }
          }}
          style={button}
          variant="contained"
        >
          {loading ? (
            <ReactLoading
              height={25}
              width={25}
              type={"spinningBubbles"}
              color="white"
            />
          ) : (
            "添加候选人"
          )}
        </Button>
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
  paddingTop: 150,
  background: "linear-gradient(to right, white, #2d493b)",
  width: "50%",
  height: "700px",
  display: "flex",
  flexDirection: "column",
  padding: 10,
};
const inputs = {
  width: "50%",
  height: 40,
  margin: "10px auto",
  fontSize: 16,
  borderRadius: 4,
  outline: "none",
  border: "none",
  padding: 10,
};
const labels = {
  color: "black",
  margin: 5,
  fontSize: 16,
  textAlign: "center",
};
const button = {
  width: "50%",
  display: "flex",
  borderRadius: 20,
  alignItems: "center",
  margin: "0 auto",
  marginTop: 10,
  height: 43,
  backgroundColor: "#6b8e4e",
  "@media (max-width: 500px)": {},
};

const info = {
  width: "60%",
  height: 120,
  margin: "7px auto",
  fontSize: 16,
  borderRadius: 4,
  outline: "none",
  border: "none",
  padding: 10,
}

const tit = {
  color:"black",
  textAlign: "center",
  fontSize: 35,
}