import React, { useState } from "react";
import classnames from 'classnames';

// reactstrap components
import {
    Card, CardImg, CardTitle, CardText, CardDeck, CardFooter,
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
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Badge,
    Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function OfferList() {
    const [pills, setPills] = React.useState("2");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal);

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
        {/*<ExamplesNavbar />*/}
        <div className="wrapper">
        {/*<ProfilePageHeader />*/}
        <div className="section">
        <Container>
            <div>
                <Modal isOpen={modal} toggle={toggleModal} >
                    <ModalHeader toggle={toggleModal}>Product Details</ModalHeader>
                    <ModalBody>
                        <Card>
                            <CardImg top width="100%" src={require("assets/img/items/kayak.jpg")} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Kayak</CardTitle>
                                <CardText>Anyone who loves being out in nature will absolutely adore this kayak, it has been through som...</CardText>
                            </CardBody>
                            <CardFooter>
                                <Button color="warning">Currently rented <Badge href="#" color="dark">4 days</Badge></Button>{' '}
                            </CardFooter>
                        </Card>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="info" onClick={toggleModal}>Edit</Button>{' '}
                        <Button color="danger" onClick={toggleModal}>Remove</Button>{' '}
                        <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
            <div>
                <h2>Category</h2>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Sports <span><Badge color="dark" pill>1</Badge></span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Hardware <span><Badge color="dark" pill>4</Badge></span>
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <CardDeck className="w-25">
                                <Card className="w-25">
                                    <CardImg top width="100%" src={require("assets/img/items/kayak.jpg")} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Kayak</CardTitle>
                                        <CardText>Anyone who loves being out in nature will absolutely adore this kayak, it has been through som...</CardText>
                                    </CardBody>
                                </Card>
                            </CardDeck>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <CardDeck>
                                <Card className="w-25">
                                    <CardImg top width="100%" src={require("assets/img/items/drill.jpg")} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Drill</CardTitle>
                                        <CardText>Drill is good drill, come and get it.</CardText>
                                    </CardBody>
                                </Card>
                                <Card className="w-25">
                                    <CardBody>
                                        <CardImg top width="100%" src={require("assets/img/items/screw-driver.jpg")} alt="Card image cap" />
                                        <CardTitle>Screwdriver</CardTitle>
                                        <CardText>I am desperately looking for a hex screwdriver to finish constructing the birdhouse I have been making during the last few months in isolation</CardText>
                                    </CardBody>
                                </Card>
                                <Card className="w-25">
                                    <CardImg top width="100%" src={require("assets/img/items/lawn-mower.jpg")} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>New Lawn Mower</CardTitle>
                                        <CardText>This lawn mower is a good as new and works perfectly, feel free to contact me with any questions!</CardText>
                                    </CardBody>
                                </Card>
                                <Card className="w-25">
                                    <CardBody>
                                        <CardImg top width="100%" src={require("assets/img/items/torch.jpg")} alt="Card image cap" />
                                        <CardTitle>Torch</CardTitle>
                                        <CardText>Looking for a big ol' torch</CardText>
                                    </CardBody>
                                </Card>
                            </CardDeck>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
    </Container>
    </div>
    <DefaultFooter />
    </div>
    </>
);
}

export default OfferList;
