import React, { useState } from "react";

const users= [{
  email: "example@gmail.com",
  password:"1234",
}];

function Formular() {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [registered, setRegistered] = useState(false);


  const handleSubmitAnmeldung = (event) => {
    event.preventDefault();
    const user = users.map(u => u.email === email && u.password === pass ? u : null).filter(u => u !== null)[0];

    if (user) {
      console.log("Das Anmeldeformular wurde ausgefüllt mit E-Mail: ", email);
      setSubmitted(true);
    } else {
      console.log("Ein Benutzer mit diesem Profil ist nicht im System registriert");
    }
};


  const handleSubmitRegistrieren = (event) => {
    event.preventDefault();    
    const user = users.map(u => u.email === email ? u : null).filter(u => u !== null)[0];

    if (user) {
    console.log("Ein Benutzer mit diesem Profil wurde bereits im System registriert");
    setRegistered(true)
    } else {
      console.log("Das Registrierformular wurde ausgefüllt mit Namen:", name);
    } // Hier setzen Sie den Zustand "registered" auf "true"
  };

  const handlePassChange = (event) => {
    setPass(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRegisterLinkClick = (event) => {
    event.preventDefault();
    setShowSecondForm(true);
  };

  return (
    <>
      <div className="form-container">
        <div>
          <h2>Anmeldung</h2><br />
          <form onSubmit={handleSubmitAnmeldung}>
            <label>
              E-Mail-Adresse
              <input className="inputForm" type="email" value={email} onChange={handleEmailChange} required placeholder="EMail Adresse.."/>
            </label><br />
            <label>
              Passwort:
              <input className="inputForm" type="password" value={pass} onChange={handlePassChange} required placeholder="Passwort.."/>
            </label><br />
            <button type="submit">Anmelden</button>
            <br /><br /><p>Neue bei uns? Jetzt <a href="#" onClick={handleRegisterLinkClick}>registrieren</a></p>
          </form>
        </div>
      </div>
      {showSecondForm && (
        <div className="form-container">
          <h2>Registrierung</h2><br />
          <form onSubmit={handleSubmitRegistrieren}>
            <label>
              Name
              <input className="inputForm" type="name" value={name} onChange={handleNameChange} required placeholder="Name.."/>
            </label><br />
            <label>
              E-Mail-Adresse
              <input className="inputForm" type="email" value={email} onChange={handleEmailChange} required placeholder="EMail Adresse.."/>
            </label><br />
            <label>
              Passwort:
              <input className="inputForm" type="text" value={pass} onChange={handlePassChange} required placeholder="Passwort.."/>
            </label><br />
            <button type="submit">Registrieren</button>
            {registered && <p>Herzlichen Glückwunsch! Sie haben sich erfolgreich registriert.</p>}
          </form>
        </div>
      )}
    </>
  );
}

export default Formular;
