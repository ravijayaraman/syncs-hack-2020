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
  const [user, setUser] = React.useState({name: "Ryan Scheinder"});
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

  // Trying to get the user information of the currently logged in user based on their token, but I can't make it seem to work
  // if (localStorage.getItem('login') == null) {
  //   window.location.href = '/login-page'
  // }
  // if (JSON.parse(localStorage.getItem('login')).login == false) {
  //   window.location.href = '/login-page'
  // }
  // const { token } = JSON.parse(localStorage.getItem('login'));

  // const requestOptions = {
  //   method: 'GET',
  //   headers: { 'Content-Type': 'application/json',
  //               'Token': token 
  //             },
  //   mode: 'cors',
  // }
  // fetch('http://localhost:5000/api/v1/auth/me', requestOptions)
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data)
  //   setUser(data);
  // });

  return (
    <> 
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <h3 className="title pt-0 mt-0">Available Items (6)</h3>
            <h5 className="lead text-center mb-4">
              Items you have made available to borrow
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
                  <OfferCard
                    id="2"
                    title="Old but reliable drill"
                    user="Owned By - Ryan"
                    description="Drill is good drill, come and get it."
                    photo={require('assets/img/items/drill.jpg')}
                  />
                  <OfferCard
                    id="3"
                    title="Kayak, used once"
                    user="Owned By - Ryan"
                    description="Anyone who loves being out in nature will absolutely
                    adore this kayak, it has been through som..."
                    photo={require('assets/img/items/kayak.jpg')}
                  />
                  <OfferCard
                    id="1"
                    title="New Lawn Mower"
                    user="Owned By - Ryan"
                    description="This lawn mower is a good as new and works perfectly,
                    feel free to contact me with any questions!"
                    photo={require('assets/img/items/lawn-mower.jpg')}
                  />
                </CardDeck>
              </Col>
            </Row>
          </Container>
          <Container>
            <h3 className="title pt-0 mt-0">Requested Items (3)</h3>
            <h5 className="lead text-center mb-4">
              Items you are looking to borrow
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
                    </CardBody>
                  </Card>
                  <Card className="mb-4" style={{ minWidth: '15rem' }}>
                    <CardBody>
                      <CardTitle>Racing Bike</CardTitle>
                      <CardText style={{ height: '7rem' }}>
                        I am looking for a racing bike, preferably one I could
                        go real fast with
                      </CardText>
                    </CardBody>
                  </Card>
                  <Card className="mb-4" style={{ minWidth: '15rem' }}>
                    <CardBody>
                      <CardTitle>Screwdriver</CardTitle>
                      <CardText style={{ height: '7rem' }}>
                        I am desperately looking for a hex screwdriver to finish
                        constructing the birdhouse I have been making.
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
}

export default ProfilePage;
