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
import LandingPageHeader from "../../components/Headers/LandingPageHeader";
import { LeaderboardCard } from 'components';

function LeaderboardList() {
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
            <ExamplesNavbar />
            <div className="wrapper">
                <LandingPageHeader />
                <div className="section">
                    <Container className="container">
                        <div>
                            <h2>Leaderboard</h2>
                            <Container>
                            <h2>Our top communities</h2>
                            <LeaderboardCard imgUrl={require("assets/img/bicycle.png")} name={"Townhall community"} position={"13550 points"} location={"Townhall, Sydney"} description={"Small community based in the city center"} arrow={require("assets/img/first-trophy.png")}/>
                            <LeaderboardCard imgUrl={require("assets/img/mixer-blender.png")} name={"Blue Mountains community"} position={"12740 points"} location={"Katoomba, Sydney"} description={"Small community based in the mountain regions of Katoomba"} arrow={require("assets/img/second-trophy.png")}/>
                            <LeaderboardCard imgUrl={require("assets/img/camping-tent.png")} name={"Rosebary relief"} position={"9080 points"} location={"Rosebary, Sydney"} description={"Small community based near airport"} arrow={require("assets/img/third-trophy.png")}/>

                        </Container>
                            <Container className="container">
                                <h2>Growing communities</h2>
                                <LeaderboardCard imgUrl={require("assets/img/bicycle.png")} name={"Townhall community"} position={"3400 points"} location={"Port Stephen, Sydney"} description={"Impact around the region of Port Stephen, growth increase of 300%"} arrow={require("assets/img/gold-stars.png")}/>
                                <LeaderboardCard imgUrl={require("assets/img/mixer-blender.png")} name={"Blue Mountains community"} position={"3150 points"} location={"Newcastle, Sydney"} description={"Reached out to help other communities affected by busfire"} arrow={require("assets/img/children-award.png")}/>
                                <LeaderboardCard imgUrl={require("assets/img/camping-tent.png")} name={"Rosebary relief"} position={"2790 points"} location={"Gosford, Sydney"} description={"Reached out to all schools and tutored children for free, provided essentials to families facing difficulty"} arrow={require("assets/img/bushfire-relief-badge.png")}/>

                            </Container>
                            </div>
                    </Container>
                </div>
                <DefaultFooter />
            </div>
        </>
    );
}

export default LeaderboardList;
