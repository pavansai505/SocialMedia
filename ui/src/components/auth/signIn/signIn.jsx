import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { Col, Container, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { FcGoogle } from "react-icons/fc";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { useGoogleLogin } from "@react-oauth/google";

function SignIn(props) {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });
  
  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  return (
    <Paper elevation={24} className="authBg">
      
          <Container className="loginFormContainer">
            <div>
              
              <h1
                className="loginName"
                style={{ cursor: "pointer" }}
                
              >
                Signin
              </h1>
              <Row xs={1} className="loginFormRow gy-4">
                <Col>
                  <TextField
                    hiddenLabel
                    id="outlined-basic"
                    variant="outlined"
                    className="loginFormText"
                    label="user name or e-mail"
                  />
                </Col>
                <Col>
                  <TextField
                    hiddenLabel
                    id="outlined-basic"
                    variant="outlined"
                    type={values.showPassword ? "text" : "password"}
                    className="loginFormText"
                    label="Password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Col>
                <Col style={{ display: "flex", justifyContent: "center" }}>
                  <Row style={{ width: "50%" }}>
                    <Col className="specialAuth">
                      <FcGoogle
                        className="specialAuthIcons"
                        onClick={() => login()}
                      ></FcGoogle>
                    </Col>
                    <Col className="specialAuth">
                      <BsInstagram
                        style={{ color: "#d02eb5" }}
                        className="specialAuthIcons"
                      ></BsInstagram>
                    </Col>
                    <Col className="specialAuth">
                      <BsFacebook
                        style={{
                          color: "#4267B2",
                        }}
                        className="specialAuthIcons"
                      ></BsFacebook>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <p
                    onClick={props.handleClick}
                    style={{ cursor: "pointer" }}
                    className="authFlip"
                  >
                    Don't have a account ?
                  </p>
                </Col>
                <Col>
                  <Button variant="primary" className="signInButton">
                    Enter
                  </Button>
                </Col>
              </Row>
            </div>
          </Container>
        
    </Paper>
  );
}

export default SignIn;
