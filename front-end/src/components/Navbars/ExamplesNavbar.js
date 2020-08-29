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
            <NavbarBrand target="_blank" id="navbar-brand">
              <NavLink>
                <Link to="/">CommShare</Link>
              </NavLink>

              {/* <Link to="/about">About</Link> */}
            </NavbarBrand>
            <button
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
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink to="/leaderboard-list">
                  <Link to="/leaderboard-list">
                    <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                    <p>Leaderboard</p>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/request-list">
                  <Link to="/request-list">
                  <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                  <p>Request List</p>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/have-list">
                  <i className="now-ui-icons shopping_shop"></i>
                  <p>Have List</p>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/profile-page" id="twitter-tooltip">
                  <Link to="/profile-page">
                    <i class="far fa-user-circle fa-2x"></i>
                    <p className="d-lg-none d-xl-none">Profile</p>
                  </Link>
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
