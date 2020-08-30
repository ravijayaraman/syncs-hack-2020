import React, { useState } from 'react';

import {
  CardBody,
  Card,
  CardTitle,
  CardText,
  Button,
  CardImg,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const OfferCard = ({ id, photo, title, user, description }) => {
  //   const [imgUrl, setImgUrl] = useState('');

  return (
    <Card className="mb-4" style={{ minWidth: '15rem' }}>
      <Link to={`/prod-detail/${id}`}>
        <CardImg top style={{ height: '10rem' }} width="100%" src={photo} alt="Card image cap" />
      </Link>
      <CardBody>
        <Link to={`/prod-detail/${id}`}>
          <CardTitle>{title}</CardTitle>
        </Link>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default OfferCard;
