import './footer.scss';

import React from 'react';
import { Translate } from 'react-jhipster';
import {Col, Container, Row} from 'reactstrap';

const Footer = () => (
  <footer className="app-footer">
    <Container>
      {/* top row: links */}
      <Row className="footer-links">
        <Col xs="6" className="d-flex justify-content-center">
          <a href="/privacy">
            <Translate contentKey="footer.privacy">Privacy Policy</Translate>
          </a>
        </Col>
        <Col xs="6" className="d-flex justify-content-center">
          <a href="/terms">
            <Translate contentKey="footer.terms">Terms and Conditions</Translate>
          </a>
        </Col>
      </Row>

      {/* bottom row: copyright */}
      <Row className="footer-copy">
        <Col className="text-center">
          © 2025
          <Translate contentKey="footer.brand">Tellfam</Translate>.
          <span> </span>
          <Translate contentKey="footer.allRights">All rights reserved.</Translate>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
