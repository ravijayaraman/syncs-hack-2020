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

  const API = 'http://localhost:5000/api/v1/offers';
  const [offers, setOffers] = useState([]);

  //Called when Component is Loaded
  useEffect(() => {
    // setIsLoading(true);

    axios.get(API).then((json) => {
      const data = json.data;

      console.log(data);
      if (data.success) {
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



  //Workflow
  //1. create state and method using useState
  //2. Fetch on load. using useEffect
  //3. map the data into HTML

  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section text-center">
          <Container>
            <h3 className="title">Electronics</h3>
            <h5 className="description">Electronics</h5>
            <Row>
              <Col md="12">
                <CardDeck>
                  {offers.map((offer) => (
                    <OfferCard
                      id={offer.id}
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
