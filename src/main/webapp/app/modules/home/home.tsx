import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import {Row, Col, Alert, Button} from 'reactstrap';

import { useAppSelector } from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <div className="home-container">
      <div className="home-hero">
        <Row className="align-items-center">
          {/* Left image */}
          <Col md="6" className="home-hero__media">
            <img
              src="content/images/home/home_hero.png"
              alt="Greeting Card Preview"
            />
          </Col>

          {/* Right text & button */}
          <Col md="5" className="home-hero__content">
            <h1>
              <Translate contentKey="home.hero.title">
                Create and Send Personalized Greeting Cards
              </Translate>
            </h1>
            <p>
              <Translate contentKey="home.hero.description">
                Design unique greeting cards for any occasion and send them directly
                to your loved ones. Choose from a variety of templates or create
                your own from scratch.
              </Translate>
            </p>
            <Button color="primary" to="/cards/create" className="btn home-hero__btn">
              <Translate contentKey="home.hero.button">
                Create a Card
              </Translate>
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
