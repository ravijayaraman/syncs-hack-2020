import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          // style={{
          //   backgroundImage: "url(" + require("assets/img/bg5.jpg") + ")",
          // }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container">
            <img alt="..." src={require("assets/img/ryan.jpg")}></img>
          </div>
          <h3 className="title">Ryan Scheinder</h3>
          <p className="category">Sydney, New South Wales 2000</p>
          <div className="content">
            <div className="social-description">
              <h2>6</h2>
              <p>Available</p>
            </div>
            <div className="social-description">
              <h2>3</h2>
              <p>Requests</p>
            </div>
            <div className="social-description">
              <h2>4.5</h2>
              <p>Average Rating</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
