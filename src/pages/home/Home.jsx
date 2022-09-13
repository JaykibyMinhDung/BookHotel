import React from "react";
import styles from "./Header/Home.module.css";
import Header from "./Header/NavBarItem";
import SearchHome from "./SearchHome";
import Title from "./Header/Title";
import City from "./City/city";
import Hotel from "./Hotel/hotel";
import HomeLove from "./HomeLove/HomeLove";
import Form from "./FormSignIn/Form";
import Footer from "./Footer/footer";

const Home = () => {
  const CheckSignIn = (MoveForm) => {
    window.location.href = document.getElementById("top");
  };
  return (
    <div>
      <div className={styles.background}>
        <div>
          <div>
            <Header />
          </div>
          <Title onTop={CheckSignIn} />
        </div>
        <SearchHome />
      </div>
      <div>
        <City />
        <Hotel />
        <HomeLove />
      </div>
      <div id="top">
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
