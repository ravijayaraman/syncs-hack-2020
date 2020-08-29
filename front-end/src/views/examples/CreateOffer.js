import React from "react";

// reactstrap components
import {
    Card, CardImg, CardTitle, CardText, CardDeck, CardGroup,
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
    Media,
    InputGroup, InputGroupAddon, Input,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Form, FormGroup, Label, FormText
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";

function CreateOffer() {
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
                <LandingPageHeader />
                <div className="section">
                    <Container>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="exampleFile">File</Label>
                                    <Input type="file" name="file" id="exampleFile" />
                                    <FormText color="muted">
                                        Upload pictures of the item you are offering, this would help better serve the perople in the community
                                    </FormText>
                                </FormGroup>
                            </Col>
                            <Col>
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleEmail">Title</Label>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="Title" />
                                        <Label for="exampleEmail">Location</Label>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="Location" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleText">Description</Label>
                                        <Input type="textarea" name="text" id="exampleText" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="select">
                                            <option>Sports</option>
                                            <option>Hardware</option>
                                            <option>Home</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Input type="checkbox" name="check" id="exampleCheck"/>
                                        <Label for="exampleCheck" check>I agree to lend my personal item to the community and comply to the terms and conditions of the community guidelines. The community has the right to access your information in the website and request for further details if necessary</Label>
                                    </FormGroup>
                                    <Button>Create</Button>
                                </Form>

                            </Col>
                        </Row>
                    </Container>
                </div>
                <DefaultFooter />
            </div>
        </>
    );
}

export default CreateOffer;
