import React, { useState } from 'react';

// reactstrap components
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardGroup,
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
  InputGroup,
  InputGroupAddon,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Label,
  FormText,
} from 'reactstrap';
import { useHistory } from 'react-router-dom';

// core components
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar.js';
import DefaultFooter from 'components/Footers/DefaultFooter.js';
import LandingPageHeader from '../../components/Headers/LandingPageHeader';
import axios from 'axios';
import { getToken } from 'services/AuthService';

function CreateOffer() {
  const history = useHistory();

  const API = 'http://localhost:5000/api/v1';

  const [pills, setPills] = React.useState('2');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  const [categories, setCategories] = useState([]);

  React.useEffect(() => {
    axios.get(API + '/categories').then((json) => {
      const data = json.data;

      if (data.success) {
        setCategories(data.data);
      }
    });

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

  const handleSubmit = (event) => {
    const data = {
      title: title,
      description: description,
      minimumPoint: 0,
      type: 'have',
      user: 1,
      category: category,
      address: 'location',
      photo:
        'https://images.unsplash.com/photo-1589805164671-2650aaf9bcee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    };

    const obj = getToken();

    const config = {
      headers: { Authorization: `Bearer ${obj.token}` },
    };

    axios
      .post(`${API}/categories/${category}/offers`, data, config)
      .then((resp) => {
        const id = resp.data.data._id;
        history.push('/prod-detail/' + id);

        // <Redirect to= />
        console.log(resp);
      });

    event.preventDefault();
  };

  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section">
          <Container>
            <Row>
              <Col>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                      Upload pictures of the item you are offering, this would
                      help better serve the perople in the community
                    </FormText>
                  </FormGroup>
                  <FormGroup>
                    <Label for="title">Title</Label>
                    <Input
                      name="title"
                      id="title"
                      value={title}
                      placeholder="Title"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="location">Location</Label>
                    <Input
                      name="location"
                      id="location"
                      placeholder="Location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                      type="textarea"
                      name="description"
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="select"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </Input>
                  </FormGroup>
                  <FormGroup check>
                    <Input type="checkbox" name="check" id="exampleCheck" />
                    <Label for="exampleCheck" check>
                      I agree to lend my personal item to the community and
                      comply to the terms and conditions of the community
                      guidelines. The community has the right to access your
                      information in the website and request for further details
                      if necessary
                    </Label>
                  </FormGroup>
                  <Button>Create</Button>
                </Form>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default CreateOffer;
