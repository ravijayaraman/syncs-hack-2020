import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

function RegisterPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [userName, setUserName] = React.useState(false);
  const [email, setEmail] = React.useState(false);
  const [password, setPassword] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="page-header">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bike.jpg") + ")",
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <img
                        alt="..."
                        src={require("assets/img/logocrop.png")}
                        height="75"
                      ></img>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Name..."
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                        onChange={event => setUserName(event.target.value)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email..."
                        type="text"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                        onChange={event => setEmail(event.target.value)}
                      ></Input>
                    </InputGroup>
          <InputGroup
            className={
              "no-border input-lg" +
              (firstFocus ? " input-group-focus" : "")
            }
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="now-ui-icons objects_key-25"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Password..."
              type="password"
              onFocus={() => setFirstFocus(true)}
              onBlur={() => setFirstFocus(false)}
              onChange={event => setPassword(event.target.value)}
            ></Input>
          </InputGroup>
          <InputGroup
            className={
              "no-border input-lg" +
              (lastFocus ? " input-group-focus" : "")
            }
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="now-ui-icons location_pin"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Postcode..."
              type="text"
              onFocus={() => setLastFocus(true)}
              onBlur={() => setLastFocus(false)}
            ></Input>
          </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      onClick={() => {
                        const requestOptions = {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          mode: 'cors',
                          body: JSON.stringify(
                            {
                              name: userName, 
                              email:email, 
                              password: password, 
                              role: 'publisher',
                            }
                            )
                        };  
                      fetch('http://localhost:5000/api/v1/auth/register', requestOptions)
                      .then(response => response.json())
                      .then(data => {
                        if (data.success == false) {
                          alert("Please fill in all the required fields.")
                        } else {
                          alert("You have successfully registered and are now logged in")
                          console.log(data.token) // I get a token, and I need to do something with it.
                          localStorage.setItem('login', JSON.stringify({
                            login: true,
                            token: data.token,
                          }));
                          window.location.href='/landing-page'
                        }
                      });
                      console.log(userName);
                      console.log(email);
                      console.log(password);
                      }}
                      size="lg"
                    >
                      Register
                    </Button>
                    <div className="pull-left">
                      <h6>
                        <a
                          className="link"
                          href="#pablo"
                          onClick={(e) => window.location.href='/login-page'}
                        >
                          Already a Member? Sign In
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default RegisterPage;
