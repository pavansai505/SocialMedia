import React, { useState } from "react";
import "./auth.css";
import "./auth.scss";
import Paper from "@mui/material/Paper";
import ReactCardFlip from "react-card-flip";
import {Col, Container, Row} from 'react-bootstrap';
import SignIn from "./signIn/signIn";
import SignUp from "./signUp/signUp";
function Auth() {
  const [cardSide, setCardSide] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setCardSide((prevState) => !prevState);
  };
  return (
    <div className="authMain">
      <ReactCardFlip isFlipped={cardSide} flipDirection="horizontal">
        <SignIn handleClick={handleClick}></SignIn>
        <SignUp handleClick={handleClick}></SignUp>
      </ReactCardFlip>
    </div>
  );
}

export default Auth;
