import React, { useState } from 'react';

// reactstrap components
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardBody,
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';

// core components
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar.js';
import ProfilePageHeader from 'components/Headers/ProfilePageHeader.js';
import DefaultFooter from 'components/Footers/DefaultFooter.js';
import LandingPageHeader from 'components/Headers/LandingPageHeader';
import Axios from 'axios';

const ProductDetail = (props) => {
  const API = 'http://localhost:5000/api/v1';

  const [pills, setPills] = React.useState('2');
  const [offer, setOffer] = useState({});

  React.useEffect(() => {
    const id = props.match.params.id;

    Axios.get(`${API}/offers/${id}`).then((resp) => {
      if (resp.data.success) {
        const data = resp.data.data;
        setOffer(data);
      }
    });

    document.body.classList.add('profile-page');
    document.body.classList.add('sidebar-collapse');
    document.documentElement.classList.remove('nav-open');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove('profile-page');
      document.body.classList.remove('sidebar-collapse');
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section">
          <Container>
            <h3 className="title mt-0 pt-0">Available Items (6)</h3>
            <h5 className="description mb-3">
              Items you have made available to borrow
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <Button
                  color="info"
                  className="text-right"
                  href="/profile-page"
                >
                  « Back to profile
                </Button>
                <CardDeck>
                  <Card className="mb-4" style={{ minWidth: '15rem' }}>
                    <CardImg
                      top
                      width="100%"
                      src={require('assets/img/items/lawn-mower.jpg')}
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle style={{ fontWeight: 'Bold' }}>
                        {offer.title}
                      </CardTitle>
                      <CardText>{offer.description}</CardText>
                      <CardText style={{ fontSize: '14px' }}>
                        {offer.location?.city}, {offer.location?.country}
                      </CardText>
                      <CardText style={{ fontSize: '14px' }}>
                        {offer.category}
                      </CardText>
                      <Button color="warning">Update Item</Button>
                    </CardBody>
                  </Card>
                </CardDeck>
              </Col>
            </Row>
          </Container>

          <Container>
            <h3 className="title">Similar Items (3)</h3>
            <h5 className="description">Items you are looking to borrow</h5>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <CardDeck>
                  <Card className="mb-4" style={{ minWidth: '15rem' }}>
                    <CardBody>
                      <CardTitle>Torch</CardTitle>
                      <CardText>Looking for a big ol' torch</CardText>
                    </CardBody>
                  </Card>
                  <Card className="mb-4" style={{ minWidth: '15rem' }}>
                    <CardBody>
                      <CardTitle>Racing Bike</CardTitle>
                      <CardText>
                        I am looking for a racing bike, preferably one I could
                        go real fast with
                      </CardText>
                    </CardBody>
                  </Card>
                  <Card className="mb-4" style={{ minWidth: '15rem' }}>
                    <CardBody>
                      <CardTitle>Screwdriver</CardTitle>
                      <CardText>
                        I am desperately looking for a hex screwdriver to finish
                        constructing the birdhouse I have been making during the
                        last few months in isolation
                      </CardText>
                    </CardBody>
                  </Card>
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

export default ProductDetail;
