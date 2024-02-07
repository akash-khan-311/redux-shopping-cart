/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { addCart } from "./Redux/cart/action";



const Products = ({product}) => {
  const dispatch = useDispatch();
  const {name,imageURL,category,price,quantity} = product;
  const addToCartHandler = ()=> {
    dispatch(addCart(product))
  }
    return (
        <>
            <div className="lws-productCard">
                <img
                  className="lws-productImage"
                  src={imageURL}
                  alt="product"
                />
                <div className="p-4 space-y-2">
                  <h4 className="lws-productName">{name}</h4>
                  <p className="lws-productCategory">{category}</p>
                  <div className="flex items-center justify-between pb-2">
                    <p className="productPrice">
                      BDT <span className="lws-price">{price}</span>
                    </p>
                    <p className="productQuantity">
                      QTY <span className="lws-quantity">{quantity}</span>
                    </p>
                  </div>
                  <button disabled={quantity <= 0} onClick={addToCartHandler} className="lws-btnAddToCart">Add To Cart</button>
                </div>
              </div> 
        </>
    );
};

export default Products;