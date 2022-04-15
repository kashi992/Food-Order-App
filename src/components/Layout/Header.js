import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import mealImg from "../../assets/images/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

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
              <HeaderCartButton onClick={props.onCartClick} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="main-image">
        <img src={mealImg} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
