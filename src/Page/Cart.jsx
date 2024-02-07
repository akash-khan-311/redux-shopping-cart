/* eslint-disable react/no-unescaped-entities */

import { useSelector } from "react-redux";
import BillingSection from "../components/BillingSection";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const carts = useSelector(state=> state.carts)
  return (
    <div>
      <main className="py-16">
        <div className="container 2xl:px-8 px-2 mx-auto">
          <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
          <div className="cartListContainer">
            <div className="space-y-6">
              {/* Cart Item */}
              {carts.length >= 1 ? carts.map(cart=> <CartItem key={cart.id} product={cart}/>) : <div>
                  <h2 className="text-4xl font-bold">You Have No Product In Cart</h2>
                  <Link to={'/'}><button className="py-1 px-3 bg-gray-800 text-white rounded-sm my-20">Continue Shoping</button></Link>
                </div>}
              
              {/* Cart Items Ends */}
            </div>
            {/* Bill Details */}
           <BillingSection/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
