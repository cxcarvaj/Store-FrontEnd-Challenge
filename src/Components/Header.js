import Shop from "../Icons/Shop";
import Close from "../Icons/Close";
import ShoppingCart from "../Icons/ShoppingCart";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import { useRouter } from 'next/router'

const Header = ({ cart }) => {
  const router = useRouter();
  const [cartCount, setCartCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className="relative bg-white">
      <div className="max-w mx-auto px-4">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" onClick={()=>{
              router.push('/')
            }}>
              <span className="sr-only">C Store</span>
              <Shop className="h-8 w-auto sm:h-10 fill-current mx-2 text-purple-800	" />
              C Store
            </a>
          </div>
          {isActive ? (
            <div className="bg-white z-10 w-1/2 absolute top-5 left-2/4 border-2 ml-0">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
                onClick={() => {
                  setIsActive(!isActive);
                }}
              >
                <span className="sr-only">Close-Cart</span>
                <Close
                  className="fill-current mx-2 text-black"
                  width="auto"
                  height="2.5rem"
                />
              </button>
              <div>
                {cart.map((item, index) =>(
                  <React.Fragment key={index}>
                    <CartItem item={item.data}/>
                  </React.Fragment>
                ))}
              </div>

            </div>
          ) : (
            <div className="flex items-center justify-end md:flex-1 lg:w-0 md:mx-8">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
                onClick={() => {
                  setIsActive(!isActive);
                }}
              >
                <span className="sr-only">Shopping-Cart</span>
                <ShoppingCart
                  className="fill-current mx-2 text-black"
                  width="auto"
                  height="2.5rem"
                />
              </button>
              <div>{cartCount}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Header);
