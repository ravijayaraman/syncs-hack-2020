import React, { useState, useEffect } from 'react';

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  CardBody,
  Card,
  CardTitle,
  CardText,
  CardDeck,
  CardImg,
  Container,
  Row,
  Col,
} from 'reactstrap';

// core components
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar.js';
import LandingPageHeader from 'components/Headers/LandingPageHeader.js';
import DefaultFooter from 'components/Footers/DefaultFooter.js';
import { OfferCard, OffersByCategory } from 'components';
import axios from 'axios';
const LandingPage = (props) => {
  const [firstFocus, setFirstFocus] = useState(false);
  // creates the state
  // Create set method

  const [lastFocus, setLastFocus] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const API = 'http://localhost:5000/api/v1';
  const [offers, setOffers] = useState([]);
  const [categories, setCategories] = useState([]);

  //Called when Component is Loaded
  useEffect(() => {
    axios.get(API + '/categories').then((json) => {
      const data = json.data;

      console.log(data);
      if (data.success) {
        setCategories(data.data);
        console.log(data.data);
      }
    });

    axios.get(API + '/offers').then((json) => {
      const data = json.data;

      console.log(data);
      if (data.success) {
        let offers = data.data;

        let i = 1;
        offers.forEach((offer) => {
          offer.image_id = i++;
        });

        setOffers(data.data);
        console.log(data.data);
      }
      // setIsLoading(false);
    });

    document.body.classList.add('landing-page');
    document.body.classList.add('sidebar-collapse');
    document.documentElement.classList.remove('nav-open');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove('landing-page');
      document.body.classList.remove('sidebar-collapse');
    };
  }, []);

  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section text-center">
          <Container>
            <h3 className="title">Featured items</h3>
            <h5 className="description"></h5>
            <Row>
              <Col md="12">
                <CardDeck>
                  {offers.map((offer) => (
                    <OfferCard
                      key={offer._id}
                      id={offer._id}
                      photo={offer.photo}
                      title={offer.title}
                      description={offer.description}
                    />
                  ))}
                </CardDeck>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
};

export default LandingPage;
