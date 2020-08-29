import React from "react";

// reactstrap components
import {
  Card, CardImg, CardTitle, CardText, CardDeck,
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
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function ProfilePage() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <h3 className="title">Available Items (6)</h3>
            <h5 className="description">
              Items you can rent or borrow from Ryan
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <CardDeck>
                  <Card className="mb-4" style={{'min-width': '15rem',}}>
                    <CardImg top width="100%" src={require("assets/img/items/lawn-mower.jpg")} alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Brand new lawn mower</CardTitle>
                      <CardText>This lawn mower is a good as new and works perfectly, feel free to contact me with any questions!</CardText>
                      <Button color="success">Request Item</Button>
                    </CardBody>
                  </Card>
                  <Card className="mb-4" style={{'min-width': '15rem',}}>
                    <CardImg top width="100%" src={require("assets/img/items/drill.jpg")} alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Barely used drill</CardTitle>
                      <CardText>Drill is good drill, come and get it.</CardText>
                      <Button color="success">Request Item</Button>
                    </CardBody>
                  </Card>
                  <Card className="mb-4" style={{'min-width': '15rem',}}>
                    <CardImg top width="100%" src={require("assets/img/items/kayak.jpg")} alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Kayak</CardTitle>
                      <CardText>Anyone who loves being out in nature will absolutely adore this kayak, it has been through som...</CardText>
                      <Button color="success">Request Item</Button>
                    </CardBody>
                  </Card>
                  <Card className="mb-4" style={{'min-width': '15rem',}}>
                    <CardImg top width="100%" src={require("assets/img/items/drill.jpg")} alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Old but reliable drill</CardTitle>
                      <CardText>Drill is good drill, come and get it.</CardText>
                      <Button color="success">Request Item</Button>
                    </CardBody>
                  </Card>
                  <Card className="mb-4" style={{'min-width': '15rem',}}>
                    <CardImg top width="100%" src={require("assets/img/items/kayak.jpg")} alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Kayak, used once</CardTitle>
                      <CardText>Anyone who loves being out in nature will absolutely adore this kayak, it has been through som...</CardText>
                      <Button color="success">Request Item</Button>
                    </CardBody>
                  </Card>
                  <Card className="mb-4" style={{'min-width': '15rem',}}>
                    <CardImg top width="100%" src={require("assets/img/items/lawn-mower.jpg")} alt="Card image cap" />
                    <CardBody>
                      <CardTitle>New Lawn Mower</CardTitle>
                      <CardText>This lawn mower is a good as new and works perfectly, feel free to contact me with any questions!</CardText>
                      <Button color="success">Request Item</Button>
                    </CardBody>
                  </Card>
                </CardDeck>
              </Col>
            </Row>
          </Container>
          <Container>
            <h3 className="title">Requested Items (3)</h3>
            <h5 className="description">
              Items Ryan is looking for
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <CardDeck>
                  <Card className="mb-4" style={{'min-width': '15rem',}}>
                    <CardBody>
                      <CardTitle>Torch</CardTitle>
                      <CardText>Looking for a big ol' torch</CardText>
                      <Button color="info">Lend Item</Button>
                    </CardBody>
                  </Card>
                  <Card className="mb-4" style={{'min-width': '15rem',}}>
                    <CardBody>
                      <CardTitle>Racing Bike</CardTitle>
                      <CardText>I am looking for a racing bike, preferably one I could go real fast with</CardText>
                      <Button color="info">Lend Item</Button>
                    </CardBody>
                  </Card>
                  <Card className="mb-4" style={{'min-width': '15rem',}}>
                    <CardBody>
                      <CardTitle>Screwdriver</CardTitle>
                      <CardText>I am desperately looking for a hex screwdriver to finish constructing the birdhouse I have been making during the last few months in isolation</CardText>
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
