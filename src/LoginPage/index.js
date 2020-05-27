import React from 'react';
import '../App.scss';
import { Row, Col } from 'reactstrap';
import Carousel from './Carousel';
import InputGroup from './InputGroup';

function LoginPage() {
  return (
    <div className="App">
      <Row className="App-row">
        <Col>
          <header className="App-header">
            Header
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
        <div className="App-content-right">
          <div className="App-main-content-right">
            <div className="form-login">
              <div className="content">
                <InputGroup />
              </div>
            </div>
          </div>
        </div>
      </Row>
      <Row className="App-row">
        <Col>
          <footer className="App-footer">
            Footer
        </footer>
        </Col>
        <div className="App-content-right-corner" />
      </Row>
    </div>
  );
}

export default LoginPage;