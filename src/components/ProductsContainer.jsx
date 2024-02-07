import { useSelector } from "react-redux";
import Products from "./Products";

const ProductsContainer = () => {
  const products = useSelector((state) => state.products);
  return (
    <>
      <div className="productContainer" id="lws-productContainer">
        {/* product item */}
        {products.length >= 1
          ? products.map((product) => (
              <Products key={product.id} product={product} />
            ))
          : <div>
              <h1 className="text-5xl md:text-3xl lg:text-2xl font-bold border ">No Product Found</h1>
            </div>}

        {/* product item ends */}
      </div>
    </>
  );
};

export default ProductsContainer;
