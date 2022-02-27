import React from "react";
import "../style/Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function Footer() {
  return (
   <footer className="page-footer font-small stylish-color-dark bg-dark pt-4">
     <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-4 mx-auto">
           <h5 className="font-weight-bold text-uppercase text-white mt-3 mb-4">CRICKET CLUB</h5>
           {/* <p className="text-white">Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
          consectetur
          adipisicing elit.</p> */}

          </div>
         <hr className="clearfix w-100 d-md-none"/>
       <div className="col-md-2 mx-auto">
        <h5 className="font-weight-bold text-uppercase text-white mt-3 mb-4">MOBILE SITES & APPS</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!">m.farziapp.com</a>
          </li>
          <li>
            <a href="#!">Android</a>
          </li>
          <li>
            <a href="#!">IOS</a>
          </li>
          {/* <li>
            <a href="#!">Link 4</a>
          </li> */}
        </ul>

      </div>
      <hr className="clearfix w-100 d-md-none"/>
      <div className="col-md-2 mx-auto">

        <h5 className="font-weight-bold text-uppercase mt-3 mb-4 text-white">FOLOOW US ON</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!">facebook</a>
          </li>
          <li>
            <a href="#!">twitter</a>
          </li>
          <li>
            <a href="#!">youtube</a>
          </li>
          <li>
            <a href="#!">Pinterest</a>
          </li>
        </ul>

      </div>
      <hr className="clearfix w-100 d-md-none"/>
      <div className="col-md-2 mx-auto">
        <h5 className="font-weight-bold text-uppercase text-white mt-3 mb-4">COMPANY</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!">Careers</a>
          </li>
          <li>
            <a href="#!">Advertise</a>
          </li>
          <li>
            <a href="#!">Privacy Policy</a>
          </li>
          <li>
            <a href="#!">Terms of Use</a>
          </li>
          <li>
            <a href="#!">Farzi App TV ads</a>
          </li>
        </ul>

      </div>
   </div>
  </div>

  <hr/>

  {/* <!-- Call to action --> */}
  <ul className="list-unstyled list-inline text-center py-2">
    <li className="list-inline-item">
      <h5 className="mb-1v text-white">Register for free</h5>
    </li>
    <li className="list-inline-item">
      <a href="test" className="btn btn-danger btn-rounded">Sign up!</a>
    </li>
  </ul>
  {/* <!-- Call to action --> */}

  <hr/>

  {/* <!-- Social buttons --> */}
  <ul className="list-unstyled list-inline text-center">
    <li className="list-inline-item">
      <a className="btn-floating btn-fb mx-1">
        <i className="fab fa-facebook-f bg.white"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-tw mx-1">
        <i className="fab fa-twitter"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-gplus mx-1">
        <i className="fab fa-google-plus-g"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-li mx-1">
        <i className="fab fa-linkedin-in"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-dribbble mx-1">
        <i className="fab fa-dribbble"> </i>
      </a>
    </li>
  </ul>
  {/* <!-- Social buttons --> */}

  {/* <!-- Copyright --> */}
  <div className="footer-copyright text-center text-white py-3">© 2022 Copyright:
    <a href="https://mdbootstrap.com/"> farziapp.com</a>
  </div>
</footer>
  );
}

export default Footer;
