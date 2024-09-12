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
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       if (isFetching) {
  //         return (
  //           <div className="fetching">
  //             <h2>Fetching a person for ya!</h2>
  //           </div>
  //         );
  //       }
  //     }, 2000);
  //     return () => clearTimeout(timer);
  //   }, [isFetching]);

  const handleClick = () => {
    getPerson();
  };

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return (
      <div className="fetching">
        <h2 className="fetch-header">Fetching a person for ya!</h2>
      </div>
    );
  }
  if (person.picture.medium) {
    return (
      <div className="person">
        <Button color="primary" onClick={toggle}>
          Try Me
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
                <CardTitle tag="h5">Say Hi to:</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  {person.name.first} {person.name.last}{" "}
                  {`(${person.dob.age} ${person.gender})`}
                </CardSubtitle>
                {/* <CardSubtitle
                  style={{ backgroundColor: "lightgray" }}
                  tag="h6"
                  className="mb-2 text-muted"
                >
                  {person.location.city} {person.location.state}
                  {`(${person.location.country})`}
                </CardSubtitle> */}
                <CardText fontSize="12px">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  iste voluptate deleniti eos quaerat est repudiandae
                  laudantium, tenetur labore eligendi sapiente. Adipisci,
                  commodi optio voluptates quis voluptatem neque explicabo
                  iusto.
                </CardText>
                <Button onClick={handleClick}>Get New Person</Button>
              </CardBody>
            </Card>
          </div>
        </Fade>
      </div>
    );
  } else {
    return (
      <div className="person-card">
        <Button className="" onClick={handleClick}>
          Get New Person
        </Button>
      </div>
    );
  }
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
