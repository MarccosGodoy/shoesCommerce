import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";
import botin1 from "../../images/botin1.png";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <main>
        <section className="slogan">
          <h1>Level Up</h1>
          <h2>Your Game</h2>
        </section>
        <section className="imagesContainer">
          <ul className="imagesUl">
            <img src={botin1} alt="" className="image" />
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;
