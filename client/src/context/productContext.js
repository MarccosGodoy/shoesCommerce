import { createContext, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [name, setName] = useState(null);
  const [cost, setCost] = useState(null);
  const [img, setImg] = useState(null);
  const [productId, setProductId] = useState(null)
  const data = {
    name,
    setName,
    cost,
    setCost,
    img,
    setImg,
    productId,
    setProductId
  };
  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};

export { ProductProvider };
export default ProductContext;
