import React, { useState, useEffect } from "react";
import icon from "../assets/search-icon.jpg";
import profile from "../assets/profile-icon.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee ,} from '@fortawesome/free-solid-svg-icons';
import {
     Button,
     Container,
     Row,
     Col,Form   
    } from 'react-bootstrap';
function ModalTest() {
  return (
    <>
    <Button variant="secondary" className="mx-2">Button #2</Button>
    <button className="btn btn-success">Lunch Modal</button><br/><br/>
    <FontAwesomeIcon icon={faCoffee}/>
    {/* <FontAwesomeIcon icon={user}/> */}
    <FontAwesomeIcon icon="fa-solid fa-user-graduate" />
    <Container>
  <Row className="justify-content-md-center">
    <Col xs lg="2">
      1 of 3
    </Col>
    <Col md="auto">Variable width content</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col md="auto">Variable width content</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>
</Container>
      <div className="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="login-heading" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="login-heading">Login with PGLife</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div className="modal-body">
                    <form id="login-form" className="form" role="form" method="post" action="api/login.php">
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fas fa-user"></i>
                                </span>
                            </div>
                            <input type="email" className="form-control" name="email" placeholder="Email" required/>
                        </div>

                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fas fa-lock"></i>
                                </span>
                            </div>
                            <input type="password" className="form-control" name="password" placeholder="Password" minlength="6" required/>
                        </div>

                        <div className="form-group">
                            <button type="submit" name="login" className="btn btn-block btn-primary">Login</button>
                        </div>
                    </form>
                </div>

                <div className="modal-footer">
                    <span>
                        <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#signup-modal">Click here</a>
                        to register a new account
                    </span>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default ModalTest;
