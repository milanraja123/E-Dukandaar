import { useState } from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { Container } from "../styles/Container";
import { SignInContainer } from "../styles/SignInContainer";
import { SignUpContainer } from "../styles/SignUpContainer";
import { Form } from "../styles/Form";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import { auth } from "../Authentication/Firebase";

const LoginPage = () => {
  const { getAuthen, isAuthenticated } = useProductContext();
  const navigate = useNavigate();
  const [signIn, toggle] = useState(true);

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [signInData, setSignInData] = useState({
    email: "",
    pass: "",
  });

  const getUserData = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setSignUpData({ ...signUpData, [name]: val });
  };
  const getLoginData = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setSignInData({ ...signInData, [name]: val });
  };

  const postSignUpData = (e) => {
    e.preventDefault();
    const element1 = document.getElementById("signUpBtn");
    element1.textContent = "";
    const para = document.createElement("span");
    para.classList.add("loader");
    element1.appendChild(para);
    setTimeout(() => {
      createUserWithEmailAndPassword(auth, signUpData.email, signUpData.pass)
        .then(async (res) => {
          const user = res.user;
          await updateProfile(user, {
            displayName: signUpData.name,
          });
          getAuthen(true);
          console.log(isAuthenticated);
          navigate("/");
        })
        .catch(() => {
          const element = document.getElementById("errorMessageSignUp");
          element.style.display = "block";
          element1.removeChild(para);
          element1.textContent = "Sign Out";
        });
    }, 1000);
  };
  const postSignInData = (e) => {
    e.preventDefault();
    const element1 = document.getElementById("signInBtn");
    element1.textContent = "";
    const para = document.createElement("span");

    para.classList.add("loader");
    element1.appendChild(para);
    setTimeout(() => {
      signInWithEmailAndPassword(auth, signInData.email, signInData.pass)
        .then(() => {
          getAuthen(true);
          navigate("/");
        })
        .catch(() => {
          const element = document.getElementById("errorMessageSignIn");
          element.style.display = "block";
          element1.removeChild(para);
          element1.textContent = "Sign In"
        });
    }, 1000);
  };

  return (
    <Wrapper>
      <Container style={{ width: "60vw" }}>
        <SignUpContainer signIn={signIn}>
          <Form method="POST">
            <h1>Create Account</h1>
            <input
              type="text"
              name="name"
              value={signUpData.name}
              onChange={getUserData}
              placeholder="Name"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              value={signUpData.email}
              onChange={getUserData}
              placeholder="Email"
              autoComplete="off"
              required
            />
            <input
              type="password"
              name="pass"
              value={signUpData.pass}
              onChange={getUserData}
              placeholder="Password"
              autoComplete="off"
              required
            />
            <p
              id="errorMessageSignUp"
              style={{
                margin: "0.45rem 0 0 0",
                padding: "0.45rem 0",
                color: "red",
                display: "none",
              }}
            >
              Something went wrong.. Please try again
            </p>
            <Button onClick={postSignUpData} id="signUpBtn">Sign Up</Button>
          </Form>
        </SignUpContainer>

        <SignInContainer signIn={signIn}>
          <Form method="POST">
            <h1>Sign in</h1>
            <input
              type="email"
              name="email"
              value={signInData.email}
              onChange={getLoginData}
              placeholder="Email"
              autoComplete="off"
              required
            />
            <input
              type="password"
              name="pass"
              value={signInData.pass}
              onChange={getLoginData}
              placeholder="Password"
              autoComplete="off"
              required
            />
            <p
              id="errorMessageSignIn"
              style={{
                margin: "0.45rem 0 0 0",
                padding: "0.45rem 0",
                color: "red",
                display: "none",
              }}
            >
              Wrong credential.. Please check and try again
            </p>
            <a href="#">Forgot your password?</a>
            <Button onClick={postSignInData} id="signInBtn">
              Sign In
            </Button>
          </Form>
        </SignInContainer>

        <OverlayContainer signIn={signIn}>
          <Overlay signIn={signIn}>
            <LeftOverlayPanel signIn={signIn}>
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <GhostButton onClick={() => toggle(true)}>Sign In</GhostButton>
            </LeftOverlayPanel>

            <RightOverlayPanel signIn={signIn}>
              <h1>Hello, Friend!</h1>
              <p>Enter Your personal details and start journey with us</p>
              <GhostButton onClick={() => toggle(false)}>Sign Up</GhostButton>
            </RightOverlayPanel>
          </Overlay>
        </OverlayContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  margin: -20px 0 50px;
  h1 {
    font-weight: bold;
    margin: 0;
  }

  a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
  }

  p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }

  input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
  }
  .loader {
    width: 2rem;
    height: 2rem;
    border: 5px solid #fff;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`;

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${(props) => (props.signIn !== true ? `transform: translateX(-100%);` : null)}
`;

const Overlay = styled.div`
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) => (props.signIn !== true ? `transform: translateX(50%);` : null)}
`;

const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${(props) => (props.signIn !== true ? `transform: translateX(0);` : null)}
`;

const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${(props) => (props.signIn !== true ? `transform: translateX(20%);` : null)}
`;

export default LoginPage;
