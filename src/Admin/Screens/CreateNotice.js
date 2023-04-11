import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";
import Snackbars from "../../Helpers/SnackBar";

export default function AddCandidate() {
  const account = useSelector((state) => state.account.account);
  const eVote = useSelector((state) => state.eVote.eVote);
  const [info,setInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertName, setAlertName] = useState("");
  const [alert, setAlert] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setAlertName("Please fill all details");
    setAlert("warning");
    setOpen(true);
  };
  const createNotice = async () => {
    setLoading(true);
    try {
      await eVote.methods
        .createNotice(info)
        .send({ from: account });
        console.log(info);
      setAlertName("公告发布成功");
      setAlert("success");
      setOpen(true);
    } catch (error) {
      setAlertName("发布失败，请重新发布");
      setAlert("error");
    }

    setLoading(false);
    setInfo("");

  };



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
      <h2 style={tit}>发布公告</h2>
        <h3 style={labels}>
          公告 <span style={{ color: "red" }}>*</span>
        </h3>
        <textarea
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          style={inputs}
          placeholder="请输入公告"
        />
        <br />
        <Button
          onClick={() => {
            if (!info) {
              handleClick();
            } else {
              createNotice();

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
            "发布公告"
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
  backgroundColor: "#2d493b",
  width: "90%",
  height: "30rem",
  display: "flex",
  flexDirection: "column",
  padding: 10,
};
const inputs = {
  width: "50%",
  height: "80%",
  margin: "10px auto",
  fontSize: 16,
  borderRadius: 4,
  outline: "none",
  border: "none",
  padding: 10,
};
const labels = {
  color: "white",
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
  marginTop: 5,
  marginBottom: 20,
  height: 50,
  backgroundColor: "black",
  "@media (maxWidth: 500px)": {},
};

// const info = {
//   width: "60%",
//   height: 120,
//   margin: "7px auto",
//   fontSize: 16,
//   borderRadius: 4,
//   outline: "none",
//   border: "none",
//   padding: 10,
// }

const tit = {
  color:"white",
  textAlign: "center",
  fontSize: 35,
}