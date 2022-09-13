import React from "react";
import Image from "./Image";
import styles from "../home/Header/Home.module.css";
import Header from "../home/Header/NavBarItem";
import Title from "../home/Header/Title";
import SearchHome from "../home/SearchHome";
import Footer from "../home/Footer/footer";
import Form from "../home/FormSignIn/Form";

const Homepage = {
  name: "Tower Street Apartments",
  address: "Elton St 125 New york",
  distance: "Excellent location - 500m from center",
  price: "Book a stay over $114 at this property and get a free airport taxi",
  photos: [
    "./images/hotel_detail_1.jpg",
    "./images/hotel_detail_2.jpg",
    "./images/hotel_detail_3.jpg",
    "./images/hotel_detail_4.jpg",
    "./images/hotel_detail_5.jpg",
    "./images/hotel_detail_6.jpg",
  ],
  title: "Stay in the heart of City",
  description: `Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air
     conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a 
     microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well
      as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main 
      Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from 
      Tower Street Apartments, and the property offers a paid airport shuttle service.
      `,
  nine_night_price: 955,
};
const Detail = () => {
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
      <Image
        name={Homepage.name}
        address={Homepage.address}
        distance={Homepage.distance}
        price={Homepage.price}
        photos={Homepage.photos}
        title={Homepage.title}
        description={Homepage.description}
        nine_night_price={Homepage.nine_night_price}
      />
      <div id="top">
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
