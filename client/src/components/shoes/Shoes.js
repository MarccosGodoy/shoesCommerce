import React, { useContext } from "react";
import "./Shoes.css";
import { useNavigate } from "react-router-dom";
import ProductContext from "../../context/productContext";
const Shoes = ({ image, name, price, productId }) => {
  const { setImg, setCost, setName, setProductId } = useContext(ProductContext);
  let navigate = useNavigate();

  const goPayment = () => {

    navigate("/payment");
    setImg(image);
    setCost(price);
    setName(name);
    setProductId(productId);
  };
  return (
    <ul className="shoes">
      <li className="shoesImage" onClick={goPayment}>
        <img src={image} alt="" />
      </li>
      <li className="shoesName">{name}</li>
      <li className="shoesPrice">$ {price}</li>
      <li className="shoesButton" onClick={goPayment}>
        Buy
      </li>
    </ul>
  );
};

export default Shoes;
