import React from "react";
import Search from "../../../data/search.json";
import Footer from "../../home/Footer/footer";
import styles from "../../home/Header/Home.module.css";
import Header from "../../home/Header/NavBarItem";
import Title from "../../home/Header/Title";
import SearchHome from "../../home/SearchHome";
import InformationSearchList from "./InformationSearchList";
import Form from "../../home/FormSignIn/Form";

// const Search = [
//   {
//     name: "Tower Street Apartments",
//     distance: "500m",
//     tag: "Free airport taxi",
//     type: "Entire studio • 1 bathroom • 21m² 1 full bed",
//     description: "Studio Apartment with Air conditioning",
//     free_cancel: true,
//     price: 112,
//     rate: 8.9,
//     rate_text: "Excellent",
//     image_url: "./images/hotel_search_1.webp",
//   },
//   {
//     name: "Comfort Suites Airport",
//     distance: "200m",
//     tag: "Free Breakfast",
//     type: "Entire studio • 2 bathroom • 100m² 2 full bed",
//     description: "Studio Apartment",
//     free_cancel: true,
//     price: 140,
//     rate: 9.3,
//     rate_text: "Exceptional",
//     image_url: "./images/hotel_search_2.jpg",
//   },
//   {
//     name: "Four Seasons Hotel",
//     distance: "100m",
//     tag: "Free Parking",
//     type: "1 bathroom • 51m² 2 full bed",
//     description: "Hotel in Lisbon",
//     free_cancel: false,
//     price: 99,
//     rate: 8.8,
//     rate_text: "Excellent",
//     image_url: "./images/hotel_search_3.jpg",
//   },
// ];

const SearchList = () => {
  return (
    <div>
      <div className={styles.background}>
        <div>
          <div>
            <Header />
          </div>
          <Title />
        </div>
        <SearchHome />
      </div>
      <div className="">
        <InformationSearchList tour={Search} />
      </div>
      <Form />
      <Footer />
    </div>
  );
};

export default SearchList;
