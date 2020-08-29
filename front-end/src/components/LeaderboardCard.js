import React, { useState } from 'react';

import {
    CardBody,
    Card,
    CardTitle,
    CardText,
    Button,
    Row,
    Col,
    CardImg,
} from 'reactstrap';

const LeaderboardCard = ({ imgUrl, name, description, location, position, arrow }) => {
    //   const [imgUrl, setImgUrl] = useState('');

    return (
        <Card>
            <Row>
                <Col>
                    <CardImg className="w-75" top width="100%" src={imgUrl} alt="Card image cap" />
                </Col>
                <Col>
                    <CardTitle>{name}</CardTitle>
                </Col>
                <Col>
                    <CardText>{description}</CardText>
                </Col>
                <Col>
                    <CardText>{location}</CardText>
                </Col>
                <Col>
                    <CardImg className="w-50" top width="100%" src={arrow} alt="Card image cap" />
                </Col>
                <Col>
                    <CardText>{position}</CardText>
                </Col>
            </Row>
        </Card>
    );
};

export default LeaderboardCard;
