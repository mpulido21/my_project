import React from "react";
import { Col, Container, Row, Button, Card, CardBody } from "reactstrap";

const AwardCard = props => (
  <Card>
    <CardBody>
      <img alt="award" src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/flexed-biceps.png" width="50px" />
      <p>{props.title}</p>
      <img alt="avatar" src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/man-running.png" width="50px" />
      <p>{props.text}</p>
      <h6>From: {props.sender}</h6>
      <h6>To: {props.receiver}</h6>
    </CardBody>
  </Card>
)

export default AwardCard;