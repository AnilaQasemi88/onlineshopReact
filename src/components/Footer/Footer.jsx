import React from "react";

const Footer = () => {
  return (
    
    <footer>
      <div className="row">
        <div className="col">
          <h3>Copyright © Your Website 2023</h3>
        </div>
        <div className="col">
          <h2>KEEP IN TOUCH</h2>
          <h3><a href="#"><i className="fab fa-instagram"></i></a><a href="#"><i className="fab fa-snapchat"></i></a><a href="#"><i className="fab fa-facebook"></i></a></h3>
        </div>
        <div className="col">
        <h2>ABOUT</h2>
          <h3><a href="#">Privacy Policy</a><a href="#">Terms of Use</a></h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
