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

function LandingPage() {
  const [firstFocus, setFirstFocus] = useState(false);
  const [lastFocus, setLastFocus] = useState(false);

  useEffect(() => {
    fetch(
      'https://my-json-server.typicode.com/ravijayaraman/syncs-hack-2020/posts'
    )
      .then((response) => response.json())
      .then((json) => console.log(json));

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
}

export default LandingPage;
