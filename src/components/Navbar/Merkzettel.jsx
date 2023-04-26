import React, { useContext } from "react";
import { CartContext } from "../store/Context";


export default function Merkzettel() {
  const { wishList, removeItemFromWishList } = useContext(CartContext);

  return (
    <div className="shop">
      <h1>Merkzettel!</h1>
      <ul>
        {wishList &&
          wishList.map((item, index) => (
            <li key={`${item.id}-${index}`}>
              <span>
                <img src={item.image} alt={item.name} />
              </span>
              <br />
              <h3>{item.name}</h3>
              <br />
              <p>{item.beschreibung}</p>
              <br />
              <p>{item.price} €</p>
              <button onClick={() => removeItemFromWishList(index)}>
                Artikel entfernen
              </button>
            </li>
          ))}
      </ul>
    </div>
    
  );
}
