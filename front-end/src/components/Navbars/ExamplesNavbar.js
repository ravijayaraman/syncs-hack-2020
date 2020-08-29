import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from 'reactstrap';

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState('navbar-transparent');
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor('');
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor('navbar-transparent');
      }
    };
    window.addEventListener('scroll', updateNavbarColor);
    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle('nav-open');
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={'fixed-top ' + navbarColor} color="info" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand tag={Link} to="/" id="navbar-brand">
              CommShare
            </NavbarBrand>
            {/* <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle('nav-open');
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button> */}
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink tag={Link} to="/leaderboard-list">
                  <i className="now-ui-icons sport_trophy"></i>
                  <p>Leaderboard</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/request-list">
                  <i className="now-ui-icons arrows-1_share-66"></i>
                  <p>Requests</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/have-list">
                  <i className="now-ui-icons shopping_shop"></i>
                  <p>Borrow</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/create-offer">
                  <i className="now-ui-icons design_bullet-list-67"></i>
                  <p>Create Offer</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/profile-page" id="twitter-tooltip">
                  <i className="far fa-user-circle fa-2x"></i>
                  <p className="d-lg-none d-xl-none">Profile</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
