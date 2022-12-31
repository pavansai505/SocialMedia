import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavBar from "./navbar/navBar";
import "./home.css";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineCompass,
  AiOutlineMessage,
  AiOutlineHeart,
} from "react-icons/ai";
import { GoDiffAdded } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import Avatar from "@mui/material/Avatar";
import { Box, Paper, requirePropFactory } from "@mui/material";
import SideMenu from "./sideMenu/sideMenu";
import Cards from "./cards/cards";
function Home() {
  return (
    <>
      <NavBar></NavBar>
      <Row className="g-0">
        
          <SideMenu></SideMenu>
       
        <Col style={{ backgroundColor: "black" }}>
          <Container
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              width:'80vw'
            }}
          >
            {[...Array(10)].map((ele) => {
              return (
                <Paper
                  style={{
                    width: "40vw",
                    minWidth:'300px',
                    margin: "2rem 0rem"
                  }}
                >
                  <Cards></Cards>
                </Paper>
              );
            })}
          </Container>
        </Col>
      </Row>
    </>
  );
}

export default Home;
