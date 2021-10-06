import React, { useState, useEffect } from "react";
import "./Person.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Fade,
} from "reactstrap";

import { connect } from "react-redux";
import { fetchFail, fetchStart, fetchSuccess, getPerson } from "../actions";

function Person(props) {
  const [fadeIn, setFadeIn] = useState(true);
  const toggle = () => setFadeIn(!fadeIn);

  const { person, isFetching, error, getPerson } = props;
  useEffect(() => {}, []);
  const handleClick = () => {
    getPerson();
  };

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching person for ya!</h2>;
  }
  return (
    <div className="person">
      <Button color="primary" onClick={toggle}>
        Toggle Fade
      </Button>
      <Fade in={fadeIn} tag="h5" className="mt-3">
        <div className="person-card">
          <Card>
            <CardImg
              top
              width="100%"
              src={person.picture.medium}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Say Hi to: {person.name.first} {person.name.last}
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button onClick={handleClick}>Get New Person</Button>
            </CardBody>
          </Card>
        </div>
      </Fade>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    person: state.person,
    isFetching: state.isFetching,
    error: state.error,
  };
};
export default connect(mapStateToProps, {
  fetchFail,
  fetchStart,
  fetchSuccess,
  getPerson,
})(Person);
