import React from 'react';
import '../App.scss';
import { Row, Col } from 'reactstrap';
import Carousel from './Carousel';

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