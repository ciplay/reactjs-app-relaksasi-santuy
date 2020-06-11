import React, { Component } from 'react';
import '../App.scss';
import { Row, Col } from 'reactstrap';
import Carousel from './Carousel';
import InputGroup from './InputGroup';

class LoginPage extends Component {
  render() {
    return (
      <div className="App">
        <Row className="App-row">
          <Col>
            <header className="App-header">
              RELAKSASI SANTUY
        </header>
          </Col>
          <div className="App-content-right-corner" />
        </Row>
        <Row className="App-row">
          <Col className="App-col">
            <div className="App-main-content-left">
              <Carousel />
            </div>
          </Col>
          <div className="wrapper-layer">
            <div className="wrapper-second">
              <div className="block-space" />
              <div className="frame-button-left-layer1"><div className="frame-button-left-layer2"><div className="button-login-left" /></div></div>
            </div>
            <div className="split-circle" />
          </div>
          <div className="App-content-right">
            <div className="App-main-content-right">
              <div className="form-login">
                <div className="content">
                  <InputGroup />
                </div>
                <div className="frame-button-right-layer1"><div className="frame-button-right-layer2" /></div>
              </div>
              <div className="split-circle" />
            </div>
          </div>
        </Row>
        <Row className="App-row">
          <Col>
            <footer className="App-footer">
            </footer>
          </Col>
          <div className="App-content-right-corner" />
        </Row>
      </div>
    );
  }
}

export default LoginPage;