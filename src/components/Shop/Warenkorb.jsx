import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../store/Context";

export default function Warenkorb() {
  const { cartItems, removeItemFromCart, updateQuantity, quantities } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, item, index) => acc + item.price * quantities[index].quantity,
    0
  );

  return (
    <div className="shop">
      <h1>Warenkorb!</h1>
      <div style={{ display: "flex" }}>
        <div style={{ width: "70%" }}>
          <ul>
            {cartItems &&
              cartItems.map((item, index) => (
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
                  <select
                    name="quantity"
                    id="quantity"
                    value={quantities[index].quantity}
                    onChange={(e) =>
                      updateQuantity(index, parseInt(e.target.value))
                    }
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <button onClick={() => removeItemFromCart(index)}>
                    Artikel entfernen
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <div
          style={{ width: "30%", border: "1px solid black", height: "auto" }}
        >
          <div>
            <h2>Summe</h2>
            <table style={{ margin: "30px auto 30px auto", fontSize: "15px" }}>
              <tbody>
                <tr>
                  <th>Produkte:</th>
                  <td>
                    {cartItems &&
                      cartItems.map((item, index) => (
                        <li key={`${item.id}-${index}`}>
                          <br />
                          <h6>{item.name}</h6>
                          <br />
                          <p>
                            {item.price} € x {quantities[index].quantity} ={" "}
                            {item.price * quantities[index].quantity} €
                          </p>
                          <hr />
                       

                        </li>
                      ))}
                  </td>
                </tr>
                {/* <tr>
                  <td>
                    <br />
                  </td>
                </tr>
                <tr>
                  <th>Anzahl der Artikel:</th>
                  <td>{quantities.length}</td>
                </tr> */}
                <tr>
                  <td>
                    <br />
                  </td>
                </tr>
              </tbody>
              <tfoot style={{ borderTop: "1px solid #d0d0d0" }}>
                <tr>
                  <th>Gesamtsumme:</th>
                  <td>{totalPrice} €</td>
                </tr>
                <tr>
                  <td>
                    <br />
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <button>
            <Link to="/kasse">Weiter zur Kasse</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
