import React from 'react';

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
import { OfferCard } from 'components';

function ProfilePage() {
  const [pills, setPills] = React.useState('2');
  React.useEffect(() => {
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
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <h3 className="title pt-0 mt-0">Available Items (6)</h3>
            <h5 className="lead text-center mb-4">
              Items you can borrow from Ryan
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <CardDeck>
                  <OfferCard
                    id="1"
                    title="Brand new lawn mower"
                    user="Owned By - Ryan"
                    description="This lawn mower is a good as new and works perfectly,
                        feel free to contact me with any questions!"
                    photo={require('assets/img/items/lawn-mower.jpg')}
                  />
                  <OfferCard
                    id="2"
                    title="Barely used drill"
                    user="Owned By - Ryan"
                    description="Drill is good drill, come and get it."
                    photo={require('assets/img/items/drill.jpg')}
                  />
                  <OfferCard
                    id="3"
                    title="Kayak"
                    user="Owned By - Ryan"
                    description="Anyone who loves being out in nature will absolutely
                    adore this kayak, it has been through som..."
                    photo={require('assets/img/items/kayak.jpg')}
                  />

                  <Card className="mb-4" style={{ minWidth: '15rem' }}>
                    <CardImg
                      top
                      width="100%"
                      src={require('assets/img/items/drill.jpg')}
                      style={{ height: '10rem' }}
                    />
                    <CardBody>
                      <CardTitle>Old but reliable drill</CardTitle>
                      <CardText style={{ height: '7rem' }}>
                        Drill is good drill, come and get it.
                      </CardText>
                    </CardBody>
                  </Card>
                  <Card className="mb-4" style={{ minWidth: '15rem' }}>
                    <CardImg
                      top
                      width="100%"
                      src={require('assets/img/items/kayak.jpg')}
                      style={{ height: '10rem' }}
                    />
                    <CardBody>
                      <CardTitle>Kayak, used once</CardTitle>
                      <CardText style={{ height: '7rem' }}>
                        Anyone who loves being out in nature will absolutely
                        adore this kayak, it has been through som...
                      </CardText>
                    </CardBody>
                  </Card>
                  <Card className="mb-4" style={{ minWidth: '15rem' }}>
                    <CardImg
                      top
                      width="100%"
                      src={require('assets/img/items/lawn-mower.jpg')}
                      style={{ height: '10rem' }}
                    />
                    <CardBody>
                      <CardTitle>New Lawn Mower</CardTitle>
                      <CardText style={{ height: '7rem' }}>
                        This lawn mower is a good as new and works perfectly,
                        feel free to contact me with any questions!
                      </CardText>
                    </CardBody>
                  </Card>
                </CardDeck>
              </Col>
            </Row>
          </Container>
          <Container>
            <h3 className="title pt-0 mt-0">Requested Items (3)</h3>
            <h5 className="lead text-center mb-4">
              Items Ryan is looking to borrow
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <CardDeck>
                  <Card className="mb-4" style={{ minWidth: '15rem' }}>
                    <CardBody>
                      <CardTitle>Torch</CardTitle>
                      <CardText style={{ height: '7rem' }}>
                        Looking for a big ol' torch
                      </CardText>
                      <Button color="info">Lend Item</Button>
                    </CardBody>
                  </Card>
                  <Card className="mb-4" style={{ minWidth: '15rem' }}>
                    <CardBody>
                      <CardTitle>Racing Bike</CardTitle>
                      <CardText style={{ height: '7rem' }}>
                        I am looking for a racing bike, preferably one I could
                        go real fast with
                      </CardText>
                      <Button color="info">Lend Item</Button>
                    </CardBody>
                  </Card>
                  <Card className="mb-4" style={{ minWidth: '15rem' }}>
                    <CardBody>
                      <CardTitle>Screwdriver</CardTitle>
                      <CardText style={{ height: '7rem' }}>
                        I am desperately looking for a hex screwdriver to finish
                        constructing the birdhouse I have been making.
                      </CardText>
                      <Button color="info">Lend Item</Button>
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
}

export default ProfilePage;
