import React, { useEffect, useState } from "react";

const Kasse = () => {
  const [cartItems, setCartItems] = useState([]);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  const handleAbschliessen = (e) => {
    e.preventDefault();
    setShowMessage(true);
  };

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div className="form-container" style={{ width: "70%" }}>
        <h2>Rechnungsadresse</h2>
        <br />
        <form>
          <label>
            Adresse
            <input
              className="inputForm"
              type="email"
              placeholder="EMail Adresse.."
            />
          </label>
          <br />
          <label>
            Postleitzahl:
            <input className="inputForm" type="text" placeholder="Postleitzahl.." />
          </label>
          <br />
          <label>
            Ort:
            <input className="inputForm" type="text" placeholder="Ort.." />
          </label>
          <br />
          <h2>Wie möchtest du dein Paket erhalten?</h2>
          <br />
          <input
            type="radio"
            id="Standardlieferung"
            name="paket"
            value="STANDARD"
          />
          <label>Standardlieferung – nach Hause</label>
          <br />
          <br />
          <input type="radio" id="H&M-Geschäft" name="paket" value="GESCHÄFT" />
          <label>Umweltfreundlichere Lieferung in ein Geschäft</label>
          <br />
          <br />
          <input
            type="radio"
            id="Paketstation"
            name="paket"
            value="PAKETSTATION"
          />
          <label>Umweltfreundlichere Lieferung zur Paketstation</label>
          <br />
          <button onClick={handleAbschliessen}>Kauf abschließen</button>

          {showMessage && <p>Danke für Ihren Einkauf!</p>}
        </form>
        
      </div>
      <div className="form-container" style={{ width: "30%" }}>
        <h2>Summe</h2>
        <br />
        <div>
          <div>
            <table style={{ margin: "50px auto 0 auto", fontSize: "20px" }}>
              <tbody>
                <tr>
                  <th>Anzahl der Artikel</th>
                  <td>{cartItems.length}</td>
                </tr>
                <tr><td><br /></td></tr>
                <tr>
                  <th>Lieferung</th>
                  <td></td>
                </tr>
                <tr><td><br /></td></tr>
              </tbody>
              <tfoot style={{ borderTop: "1px solid #d0d0d0" }}>
                <tr>
                  <th>Gesamtsumme:</th>
                  <td>{totalPrice} €</td>
                </tr>
                
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kasse;
