import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "./Redux/ProductsAdd/action";

const InputForm = () => {
  const [input, setInput] = useState({
    name: "",
    category: "",
    imageURL: "",
    price: "",
    quantity: "",
  });
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addProducts(input));
    setInput({
      name: "",
      category: "",
      imgUrl: "",
      price: "",
      quantity: "",
    });

  };


  const inputHandler = (fieldName,e)=> {
    if(fieldName === 'price' || fieldName === 'quantity') {
      setInput({...input, [fieldName]: Number(e.target.value)})
    }
    else {
      setInput({...input, [fieldName] : e.target.value})
    }
  }
  return (
    <div>
      {/* Product Input Form */}
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form onSubmit={submitHandler} className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
          {/* product name */}
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input
              className="addProductInput"
              id="lws-inputName"
              type="text"
              required
              value={input?.name}
              onChange={(e)=> inputHandler('name',e)}
            />
          </div>
          {/* product category */}
          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              required
              value={input?.category}
              onChange={(e)=> inputHandler('category',e)}
            />
          </div>
          {/* product image url */}
          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              required
              value={input?.imageURL}
              onChange={(e)=> inputHandler('imageURL',e)}
            />
          </div>
          {/* price & quantity container */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* price */}
            <div className="space-y-2">
              <label htmlFor="ws-inputPrice">Price</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                required
                value={input?.price}
                onChange={(e)=> inputHandler('price',e)}
              />
            </div>
            {/* quantity */}
            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                required
                value={input?.quantity}
                onChange={(e)=>inputHandler("quantity",e)}
              />
            </div>
          </div>
          {/* submit button */}
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
      {/* Product Input Form Ends */}
    </div>
  );
};

export default InputForm;
