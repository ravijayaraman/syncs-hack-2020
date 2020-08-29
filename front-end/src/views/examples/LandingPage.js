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

    // fetch(API + '/' + props.match.params.id)
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setOffers(json);
    //     console.log(json);
    //     // setIsLoading(false);
    //   });

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
      {/* {offers.map((o) => (
        <Link to={`/prod-detail/${o.id}`}>asdf</Link>
      ))} */}

      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section text-center">
          <Container>
            <h3 className="title">Electronics</h3>
            <h5 className="description">Electronics</h5>
            <OffersByCategory />
          </Container>
          <Container>
            <h3 className="title">Electronics</h3>
            <h5 className="description">Electronics</h5>
            <OffersByCategory />
          </Container>
          <Container>
            <h3 className="title">Home</h3>
            <h3 className="description">Home improvement</h3>
            <OffersByCategory />
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
};

export default LandingPage;
