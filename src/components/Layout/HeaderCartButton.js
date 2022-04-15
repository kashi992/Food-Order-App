import { React, useContext } from "react";
import { Button } from "react-bootstrap";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const cartTotalItem = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <>
      <Button className="button" onClick={props.onClick}>
        <span className="icon">
          <CartIcon />
        </span>
        <span>Cart</span>
        <span className="badge_custom">{cartTotalItem}</span>
      </Button>
    </>
  );
};

export default HeaderCartButton;
