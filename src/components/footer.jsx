// function Footer(){
//     return <>
//     </>
// }
// export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4" style={{overflow:'hidden'}}>
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-12 mb-3">
        <h5>Springdale Public School</h5>
        <p>
          Address: 123 School Lane, City, Country
        </p>
      </div>
      <div className="col-md-4 col-12 mb-3">
        <h5>Contact Us</h5>
        <ul className="list-unstyled p-3" style={{backgroundColor:'rgb(33,37,41,1)'}}>
          <li>Email: info@springdale.com</li>
          <li>Phone: +123 456 7890</li>
        </ul>
      </div>
      <div className="col-md-4 col-12 mb-3">
        <h5>Follow Us</h5>
        <ul className="list-unstyled p-3" style={{backgroundColor:'rgb(33,37,41,1)'}}>
          <li><a href="#" className="text-light">Facebook</a></li>
          <li><a href="#" className="text-light">Twitter</a></li>
          <li><a href="#" className="text-light">Instagram</a></li>
        </ul>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col text-center">
        <p className="mb-0">&copy; 2024 Springdale Public School. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
