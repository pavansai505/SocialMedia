import React from "react";
import Paper from "@mui/material/Paper";
import { Col, Container, Row, Stack } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { FcGoogle } from "react-icons/fc";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { faker } from "@faker-js/faker";
import { toast } from 'react-toastify';

function SignUp(props) {
  const notify=(data)=>{
    toast.success("data", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  const [values, setValues] = React.useState({
    userName: "",
    userMail: "",
    userPassword: "",
    showPassword: false,
  });
  const handleChange = (e) => {
    const value = e.target;
    console.log(value.name, value.value);
    if (value.name == "userName") {
      setValues({ ...values, [value.name]: value.value });
    } else if (value.name == "userMail") {
      setValues({ ...values, [value.name]: value.value });
    } else {
      setValues({ ...values, [value.name]: value.value });
    }
  };
  const handleSubmit = () => {
    const values = {
      // userName:values.userName,
      // userMail:values.userMail,
      // userPassword:values.userPassword
      userName: faker.name.fullName(),
      userMail: faker.internet.email(),
      userPassword: faker.animal.lion(),
    };
    console.log(`%c${JSON.stringify(values)}`, "color:cyan;font-size:15px");
    fetch("http://localhost:8010/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(values),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res);
    }).then(data=>{
      console.log(data);
      notify(data.msg)
    }).catch(err=>console.log(err))
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  return (
    <Paper elevation={24} className="authBg">
      <Container className="loginFormContainer" fluid>
        <div>
          <h1 className="loginName" style={{ cursor: "pointer" }}>
            Register
          </h1>
          <Row xs={1} className="loginFormRow gy-4">
            <Col>
              <TextField
                hiddenLabel
                id="outlined-basic"
                variant="outlined"
                className="loginFormText"
                label="user name"
                color="warning"
                name="userName"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <TextField
                hiddenLabel
                id="outlined-basic"
                variant="outlined"
                className="loginFormText"
                label="user mail"
                color="warning"
                name="userMail"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <TextField
                hiddenLabel
                id="outlined-basic"
                variant="outlined"
                className="loginFormText"
                type={values.showPassword ? "text" : "password"}
                label="Password"
                color="warning"
                name="userPassword"
                onChange={handleChange}
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
                  <FcGoogle className="specialAuthIcons"></FcGoogle>
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
                Already have a account ?
              </p>
            </Col>
            <Col>
              <Button
                variant="primary"
                className="signInButton"
                onClick={handleSubmit}
              >
                Enter
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </Paper>
  );
}

export default SignUp;
