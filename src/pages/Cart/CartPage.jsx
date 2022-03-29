import React from "react";
import { ErrorMessage, HorizontalCard,PriceCard } from "../../components/index";
import { Link } from "react-router-dom";
import { useCartAndWishList } from "../../context/index";
import "../../styles/cart.css";


export const Cart = () => {
  const { cartState, cartDispatch, wishListState, wishListDispatch } =
    useCartAndWishList();
  const { cartItem, cartCount } = cartState;
  return (
    <>
      <h1 className="wishlist-title">My Cart</h1>
      {cartItem.length === 0 ? (
        <Link to="/Products">
          <ErrorMessage message={"your cart is empty"} />
        </Link>
      ) : (
        <div className="wishlist-card-container">
          <ul className="cart-left-container">
            <li>
              {cartItem.map((item) => (
                <HorizontalCard item={item} />
              ))}
            </li>
          </ul>
          <div className="cart-right-container">
          {cartItem.length === 0 ? (
              ""
            ):(
            <PriceCard cartState={cartState}/>)}
          </div>
        </div>
      )}
    </>
  );
};
