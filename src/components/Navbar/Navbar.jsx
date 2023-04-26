import React, { useState, useContext } from "react";
import {Link, Outlet} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartAnimation } from '@fortawesome/free-solid-svg-icons';
import { products } from "../../components/Shop/Shop";
import { CartContext } from "../store/Context";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const { cartItems, quantities } = useContext(CartContext);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && search.trim() !== "") {
      const filteredResults = products.filter(
        (item) =>
          item.name.toLowerCase().includes(search.trim().toLowerCase())
      );
      
      setResults(filteredResults);
      console.log(`Anzahl des Worts ${search}: ${filteredResults.length}`);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="navbar">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/über uns">Über Uns</Link>
        <Link to="/admin">Admin</Link>

        <input
          className="search"
          type="search"
          placeholder="Suche nach Produkten"
          value={search}
          style={{fontSize:'1.5rem', height:'60px'}}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
        />
        <Link to="/formular" >
          <i className="fas fa-user"></i>
        </Link>
        <a href="/merkzettel">
          <FontAwesomeIcon icon={faHeartAnimation} beat />
        </a>
        <a href="/warenkorb">
          <i className="fas fa-shopping-cart"><span>({cartItems.length})</span></i>
        </a>
      </nav>
      <Outlet/>
    </div>
  );
}

