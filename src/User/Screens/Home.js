import React, { useEffect } from "react";
import { StyleRoot } from "radium";
import Button from "@mui/material/Button";
import { loadBlockchainData, loadWeb3 } from "../../Helpers/Web3Helpers";
import { useDispatch } from "react-redux";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    loadWeb3();
  }, []);
  useEffect(() => {
    loadBlockchainData(dispatch);
  }, [dispatch]);
  return (
    <StyleRoot>
      <div style={rootDiv}>
        <div style={leftDiv}>
          <img
            alt="background"
            src={require("../../earth.gif")}
            height={"60%"}
            width={"60%"}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div style={rightDiv}>
          <h1 style={rightTitle}>去中心化公共投票系统</h1>
        
          <div style={buttonsDiv}>
            <Button href="/Login" style={button} variant="contained">
              投票登陆
            </Button>
            <Button href="/AdminLogin" style={button} variant="contained">
              管理员登陆
            </Button>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}
const rootDiv = {
  backgroundColor: "black",
  height: "100vh",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  display: "flex",
  flex: 1,
  flexDirection: "row",
  "@media (max-width: 500px)": {
    height: "100vh",
  },
};
const leftDiv = {
  backgroundColor: "black",

  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 500px)": {
    height: "100vh",
    display: "none",
  },
};

const rightDiv = {
  display: "flex",
  flexDirection: "column",
  padding: 10,
  flex: 0.5,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "black",
  "@media (max-width: 500px)": {
    height: "100vh",
    flex: 1,
  },
};
const rightTitle = {
  color: "white",
  margin: 0,
  padding: 10,
  fontSize: 33,
  fontWeight: "bold",
  "@media (max-width: 500px)": {
    color: "white",
  },
};
const rightCatption = {
  color: "grey",
  margin: 0,
  padding: 10,
  fontSize: 26,
  fontWeight: "bold",
  "@media (max-width: 500px)": {
    color: "white",
  },
};
const buttonsDiv = {
  display: "flex",
  flexDirection: "row",
};
const button = {
  margin: 10,
  background: "linear-gradient(to right, black, #6b8e4e",
  color: "white"
};
