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
    Alert,
} from 'reactstrap';

const LeaderboardCard = ({ imgUrl, name, description, location, position, arrow }) => {
    //   const [imgUrl, setImgUrl] = useState('');

    return (
        <Card className="align-items-center">
            <Row>
                <Col>
                    <CardImg className="w-75" top width="100%" src={imgUrl} alt="Card image cap" />
                </Col>
                <Col>
                    <h3>{name}</h3>
                </Col>
                <Col>
                    <h4>{description}</h4>
                </Col>
                <Col>
                    <h4>{location}</h4>
                </Col>
                <Col>
                    <CardImg className="w-50" top width="100%" src={arrow} alt="Card image cap" />
                </Col>
                <Col>
                    <Alert color="success">
                        <h4>{position}</h4>
                    </Alert>
                </Col>
            </Row>
        </Card>
    );
};

export default LeaderboardCard;
