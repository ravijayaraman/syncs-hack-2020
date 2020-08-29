import { Card, Col, CardDeck, Row } from 'reactstrap';
import React from 'react';
import OfferCard from './OfferCard';

const OffersByCategory = () => {
  return (
    <Row>
      <Col md="12">
        <CardDeck>
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
        </CardDeck>
      </Col>
    </Row>
  );
};

export default OffersByCategory;
