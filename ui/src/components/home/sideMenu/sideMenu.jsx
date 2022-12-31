import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
import { requirePropFactory } from "@mui/material";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Media from "react-media";

function SideMenu() {
  return (
    <>
      <Media
        query="(min-width: 1200px)"
        render={() => (
          <>
            <Nav
              defaultActiveKey="/home"
              className="flex-column sideMenuHome gap-2"
              style={{ position: "fixed" ,
              width: "15rem"}}
            >
              <Nav.Link
                href="/home"
                className="mt-5"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.2rem",
                }}
              >
                <AiFillHome></AiFillHome>&nbsp;&nbsp;
                <span style={{ fontWeight: "lighter" }}> Home </span>
              </Nav.Link>
              <Nav.Link
                eventKey="link-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.2rem",
                }}
              >
                <AiOutlineSearch></AiOutlineSearch>&nbsp;&nbsp;
                <span style={{ fontWeight: "lighter" }}> Search </span>
              </Nav.Link>
              <Nav.Link
                eventKey="link-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.2rem",
                }}
              >
                <AiOutlineCompass></AiOutlineCompass> &nbsp;&nbsp;
                <span style={{ fontWeight: "lighter" }}> Explore </span>
              </Nav.Link>
              <Nav.Link
                eventKey="link-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.2rem",
                }}
              >
                <AiOutlineMessage></AiOutlineMessage> &nbsp;&nbsp;
                <span style={{ fontWeight: "lighter" }}> Messages </span>
              </Nav.Link>
              <Nav.Link
                eventKey="link-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.2rem",
                }}
              >
                <AiOutlineHeart></AiOutlineHeart> &nbsp;&nbsp;
                <span style={{ fontWeight: "lighter" }}> Notifications </span>
              </Nav.Link>
              <Nav.Link
                eventKey="link-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.2rem",
                }}
              >
                <GoDiffAdded></GoDiffAdded> &nbsp;&nbsp;
                <span style={{ fontWeight: "lighter" }}> Create </span>
              </Nav.Link>
              <Nav.Link
                eventKey="link-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.2rem",
                }}
              >
                <Avatar
                  alt="Pavan sai"
                  sx={{ width: 24, height: 24 }}
                  src={require("../../../images/snapFilter.jpg")}
                />{" "}
                &nbsp;&nbsp;
                <span style={{ fontWeight: "lighter" }}> Profile </span>
              </Nav.Link>
              <Nav className="mb-auto"></Nav>

              <OverlayTrigger
                trigger="click"
                key={"top"}
                placement={"top"}
                rootClose={true}
                overlay={
                  <Popover id={`popover-positioned-${"top"}`}>
                    <Popover.Header as="h3">{`Popover ${"top"}`}</Popover.Header>
                    <Popover.Body>
                      <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Body>
                  </Popover>
                }
              >
                <Nav.Link
                  eventKey="link-1"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <GiHamburgerMenu></GiHamburgerMenu> &nbsp;&nbsp;
                  <span style={{ fontWeight: "lighter" }}> More </span>
                </Nav.Link>
              </OverlayTrigger>
            </Nav>
            <div style={{ width: "15rem" }}></div>
          </>
        )}
      />
      <Media query="(max-width: 1199px)" render={() => <>
        <>
            <Nav
              defaultActiveKey="/home"
              className="flex-column sideMenuHome gap-2"
              style={{ position: "fixed",width:"3.5rem" }}
            >
              <Nav.Link
                href="/home"
                className="mt-5"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.2rem",
                }}
              >
                <AiFillHome></AiFillHome>&nbsp;&nbsp;
              </Nav.Link>
              <Nav.Link
                eventKey="link-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.2rem",
                }}
              >
                <AiOutlineSearch></AiOutlineSearch>&nbsp;&nbsp;
              </Nav.Link>
              <Nav.Link
                eventKey="link-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.2rem",
                }}
              >
                <AiOutlineCompass></AiOutlineCompass> &nbsp;&nbsp;
              </Nav.Link>
              <Nav.Link
                eventKey="link-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.2rem",
                }}
              >
                <AiOutlineMessage></AiOutlineMessage> &nbsp;&nbsp;
              </Nav.Link>
              <Nav.Link
                eventKey="link-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.2rem",
                }}
              >
                <AiOutlineHeart></AiOutlineHeart> &nbsp;&nbsp;
              </Nav.Link>
              <Nav.Link
                eventKey="link-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.2rem",
                }}
              >
                <GoDiffAdded></GoDiffAdded> &nbsp;&nbsp;
              </Nav.Link>
              <Nav.Link
                eventKey="link-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.2rem",
                }}
              >
                <Avatar
                  alt="Pavan sai"
                  sx={{ width: 24, height: 24 }}
                  src={require("../../../images/snapFilter.jpg")}
                />{" "}
                &nbsp;&nbsp;
              </Nav.Link>
              <Nav className="mb-auto"></Nav>

              <OverlayTrigger
                trigger="click"
                key={"top"}
                placement={"top"}
                overlay={
                  <Popover id={`popover-positioned-${"top"}`}>
                    <Popover.Header as="h3">{`Popover ${"top"}`}</Popover.Header>
                    <Popover.Body>
                      <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Body>
                  </Popover>
                }
              >
                <Nav.Link
                  eventKey="link-1"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <GiHamburgerMenu></GiHamburgerMenu> &nbsp;&nbsp;
                </Nav.Link>
              </OverlayTrigger>
            </Nav>
            <div style={{ width: "3.5rem" }}></div>
          </>
      </>} />
    </>
  );
}

export default SideMenu;
