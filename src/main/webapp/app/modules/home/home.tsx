import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import {Row, Col, Alert, Button} from 'reactstrap';

import { useAppSelector } from 'app/config/store';

interface Category {
  key: string;
  img: string;
}
interface Testimonial {
  name: string;
  date: string;
  avatar: string;
  rating: number;
  text: string;
}

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  const categories: Category[] = [
    { key: 'home.categories.birthday',   img: 'content/images/home/home_bday.png' },
    { key: 'home.categories.thankYou',   img: 'content/images/home/home_ty.png' },
    { key: 'home.categories.holiday',    img: 'content/images/home/home_hday.png' },
    { key: 'home.categories.congrats',   img: 'content/images/home/home_congrats.png' },
    // …add more
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Sophia Clark',
      date: '2023-03-15',
      avatar: 'content/images/jhipster_woman.png',
      rating: 5,
      text: `I love using ConnectCard to send personalized cards to
             my friends and family. It's so easy to use and the cards
             always look amazing!`
    },
    {
      name: 'Ethan Bennett',
      date: '2023-04-22',
      avatar: 'content/images/jhipster_man.png',
      rating: 4,
      text: `ConnectCard is a great way to show someone you care.
             The templates are beautiful and the customization
             options are endless.`
    },
    {
      name: 'Olivia Carter',
      date: '2022-12-15',
      text: `I've used ConnectCard for several occasions and it's always a hit. 
             The recipients are always so touched by the personalized cards.`,
      avatar: 'content/images/jhipster_woman.png',
      rating: 4
    }
    // …add more
  ];

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
          <Col md="6" className="home-hero__content">
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
      <div className="home-categories">
        <h2>
          <Translate contentKey="home.categories.title">Explore Card Categories</Translate>
        </h2>
        <div className="categories-list">
          {categories.map(cat => (
              <Link
                  key={cat.key}
                  to={`/cards/category/${cat.key}`}
                  className="category-item"
              >
                <img src={cat.img} alt={cat.key} />
                <p>
                  <Translate contentKey={cat.key}>Category</Translate>
                </p>
              </Link>
          ))}
        </div>
      </div>
      <div className="home-testimonials">
        <h2>
          <Translate contentKey="home.testimonials.title">What Our Users Say</Translate>
        </h2>
        {testimonials.map((t, idx) => (
            <div className="testimonial" key={idx}>
              <Row>
                <Col xs="1" className="testimonial__avatar">
                  <img src={t.avatar} alt={t.name} />
                </Col>
                <Col xs="11">
                  <div className="testimonial__header">
                    <h5>{t.name}</h5>
                    <small className="text-muted">{t.date}</small>
                  </div>
                  <div className="testimonial__stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={i < t.rating ? 'star filled' : 'star'}>
                      ★
                    </span>
                    ))}
                  </div>
                  <p className="testimonial__text">{t.text}</p>
                </Col>
              </Row>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
