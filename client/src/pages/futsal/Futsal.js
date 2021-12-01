import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Shoes from "../../components/shoes/Shoes";
import "./Futsal.css";
import axios from "axios";
const Futsal = () => {
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    getShoes();
  }, []);

  async function getShoes() {
    const response = await axios.post(
      "http://localhost:5000/products/getByCategory",
      { category: "futsal" }
    );
    const data = response.data;
    console.log(data.products);
    setShoes(data.products);
  }
  return (
    <div className="futsal">
      <Navbar />
      <main>
        {shoes.map((shoe) => {
          return <Shoes image={shoe.img} name={shoe.name} price={shoe.price} productId={shoe._id}/>;
        })}
      </main>
    </div>
  );
};

export default Futsal;
