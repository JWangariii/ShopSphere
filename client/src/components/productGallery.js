// ProductGallery.js
import React from "react";
import "./styles.css";

// Import images from the assets folder
import item1 from "./assets/images/1.jpg";
import item2 from "./assets/images/2.jpg";
import item3 from "./assets/images/3.jpg";
import item4 from "./assets/images/4.jpg";
import item5 from "./assets/images/5.jpg";
import item6 from "./assets/images/6.jpg";
import item7 from "./assets/images/7.jpg";
import item8 from "./assets/images/8.jpg";
import item9 from "./assets/images/9.jpg";
import item10 from "./assets/images/10.jpg";
import item11 from "./assets/images/11.jpg";
import item12 from "./assets/images/12.jpg";
import item13 from "./assets/images/13.jpg";
import item14 from "./assets/images/14.jpg";
import item15 from "./assets/images/15.jpg";

const ProductGallery = () => {
  const products = [
    { id: 1, name: " 1", image: item1 },
    { id: 2, name: " 2", image: item2 },
    { id: 3, name: " 3", image: item3 },
    { id: 4, name: " 4", image: item4 },
    { id: 5, name: " 5", image: item5 },
    { id: 6, name: " 6", image: item6 },
    { id: 7, name: " 7", image: item7 },
    { id: 8, name: " 8", image: item8 },
    { id: 9, name: " 9", image: item9 },
    { id: 10, name: " 10", image: item10 },
    { id: 11, name: " 11", image: item11 },
    { id: 12, name: " 12", image: item12 },
    { id: 13, name: " 13", image: item13 },
    { id: 14, name: " 14", image: item14 },
    { id: 15, name: " 15", image: item15 },
  ];

  return (
    <div>
      <h2>Product Gallery</h2>
      <div className="product-gallery">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
