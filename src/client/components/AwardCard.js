import React from "react";
import { Col, Container, Row, Button, Card, CardBody } from "reactstrap";

const AwardCard = props => (
  <Card>
    <CardBody>
      <h5 body className="text-center">WHAT: {props.type}</h5>
      {/* <p>WHEN: {props.text}</p> */}
      <p>COUNT: {props.count}</p>
      <p>COMMENT: {props.comment}</p>
      <img alt="award" src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/red-apple.png" width="50px" />
    </CardBody>
  </Card>
)

export default AwardCard;