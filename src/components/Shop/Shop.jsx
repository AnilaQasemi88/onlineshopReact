import React, { useContext } from "react";

import { CartContext } from "../store/Context";
import { faHeart as faHeartAnimation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import iPhone14Pro from "./image/iPhone-14-Pro.jpg";
import iPhone14 from "./image/iphone-14.jpg";
import iPhone13 from "./image/iphone-13.jpg";
import iPhoneSE from "./image/iphone-se.jpg";

export const products = [
  {
    id: 1,
    image: iPhone14Pro,
    name: "iPhone 14 Pro",
    beschreibung: "Das ultimative iPhone",
    price: 1299,
  },
  {
    id: 2,
    image: iPhone14,
    name: "iPhone 14",
    beschreibung: "Das Powerpaket",
    price: 999,
  },
  {
    id: 3,
    image: iPhone13,
    name: "iPhone 13",
    beschreibung: "Großartig wie immer",
    price: 799,
  },
  {
    id: 4,
    image: iPhoneSE,
    name: "iPhone SE",
    beschreibung: "Superstark. Auch beim Preis",
    price: 549,
  },
];

export default function Shop() {
  const { addToCart, addWishList } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleAddToWishList = (product) => {
    addWishList(product);
  };

  return (
    <div className="shop">
      <h1>Shop</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>
              <img src={product.image} alt={product.name} />
            </span>
            <br />
            <h3>{product.name}</h3>
            <br />
            <p>{product.beschreibung}</p>
            <br />
            <p>{product.price} €</p>
            <button onClick={() => handleAddToCart(product)}>Kaufen</button>
            <br />
            <button onClick={() => handleAddToWishList(product)}>
              <FontAwesomeIcon icon={faHeartAnimation} beat />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
