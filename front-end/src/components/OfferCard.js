import React, { useState } from 'react';

import {
  CardBody,
  Card,
  CardTitle,
  CardText,
  Button,
  CardImg,
} from 'reactstrap';

const OfferCard = ({ imgUrl, title, description }) => {
  //   const [imgUrl, setImgUrl] = useState('');

  return (
    <Card className="mb-4" style={{ 'min-width': '15rem' }}>
      <CardImg top width="100%" src={imgUrl} alt="Card image cap" />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
        <Button color="success">Request Item</Button>
      </CardBody>
    </Card>
  );
};

export default OfferCard;
