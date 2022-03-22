import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import mealImg from "../../assets/images/meals.jpg";

const Header = (props) => {
  return (
    <>
      <Navbar expand="lg" className="navbar_wrapper">
        <Container>
          <Navbar.Brand href="#home">ReactMeals</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <Nav.button href="#home">Home</Nav.button> */}
              <Button>Cart</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="main-image">
        <img src={mealImg} alt="" />
      </div>
    </>
  );
};

export default Header;
