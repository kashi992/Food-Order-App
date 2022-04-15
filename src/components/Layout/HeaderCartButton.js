import React from "react";
import { Button } from "react-bootstrap";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <>
      <Button className="button" onClick={props.onClick}>
        <span className="icon">
          <CartIcon />
        </span>
        <span>Cart</span>
        <span className="badge_custom">3</span>
      </Button>
    </>
  );
};

export default HeaderCartButton;
