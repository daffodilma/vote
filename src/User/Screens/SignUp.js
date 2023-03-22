import React, { useEffect, useState } from "react";
import { StyleRoot } from "radium";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { loadBlockchainData, loadWeb3 } from "../../Helpers/Web3Helpers";
export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    loadWeb3();
  }, []);
  useEffect(() => {
    loadBlockchainData(dispatch);
  }, [dispatch]);
  const account = useSelector((state) => state.account.account);
  const eVote = useSelector((state) => state.eVote.eVote);
  const signUp = async () => {
    setLoading(true);
    if (!username || !email || !password) {
      alert("please fill all details");
      setLoading(false);
      return;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat)) {
      alert("please enter valid email address");
      setLoading(false);
      return;
    }
    try {
      await eVote.methods
        .createUser(username, email, password, "")
        .send({ from: account });
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      setLoading(false);
      navigate("/Login");
    } catch (e) {
      setLoading(false);
      alert(e.message);
    }
  };
  return (
    <StyleRoot>
      <div style={rootDiv}>
        <div style={leftDiv}>
          <img
            alt="background"
            src={require("../../earth.gif")}
            height={"80%"}
            width={"80%"}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div style={rightDiv}>
          <div style={inputDiv}>
            <h3 style={{ color: "white", fontSize: 23 }}>账户注册</h3>
            <h3 style={labels}>
              用户名 <span style={{ color: "red" }}>*</span>
            </h3>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={inputs}
              placeholder="用户名"
              type="text"
            />
            <h3 style={labels}>
              账号 <span style={{ color: "red" }}>*</span>
            </h3>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputs}
              placeholder="用户名"
              type="email"
            />
            <h3 style={labels}>
              密码 <span style={{ color: "red" }}>*</span>
            </h3>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputs}
              placeholder="密码"
              type="password"
            />
            <Button onClick={signUp} style={button} variant="contained">
              {loading ? (
                <ReactLoading
                  height={30}
                  width={30}
                  type={"spinningBubbles"}
                  color="white"
                />
              ) : (
                " 注册"
              )}
            </Button>
            <Button href="/Login" style={create}>
              已经有账号了？
            </Button>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}
const rootDiv = {
  backgroundColor: "black",
  display: "flex",
  flex: 1,
  flexDirection: "row",
  height: "100vh",
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
  backgroundColor: "black",
  height: "100vh",
  flex: 0.8,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  "@media (max-width: 500px)": {
    height: "100vh",
    flex: 1,
  },
};

const inputDiv = {
  width: "80%",
  display: "flex",
  flexDirection: "column",
  "@media (max-width: 500px)": {},
};
const inputs = {
  backgroundColor: "white",
  display: "flex",
  padding: 12,
  borderRadius: 20,
  margin: 5,
  flex: 1,
  fontSize: 17,
  fontWeight: "bold",
  fontColor: "black",
  border: "1px solid grey",
  outline: "none",
  width: "73%",
  "@media (max-width: 500px)": {
    width: "80%",
  },
};
const labels = {
  margin: 5,
  fontWeight: "bold",
  color: "white",
};
const button = {
  width: "50%",
  display: "flex",
  borderRadius: 20,
  justifyContent: "center",
  alignItems: "center",
  marginLeft: 100,
  marginTop: 50,
  height: 43,
  background: "linear-gradient(to right, black, #6b8e4e",
  "@media (max-width: 500px)": {},
};
const create = {
  fontSize: 13,
  fontWeight: "bold",
  color: "white",
  margin: 10,
  "@media (max-width: 500px)": {},
};