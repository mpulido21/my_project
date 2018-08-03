import React from "react";
import { Col, Container, Row, Button, Card, CardBody } from "reactstrap";

const AwardCard1 = props => (
  <Card>
    <CardBody>
      <img alt="award" src="https://static1.squarespace.com/static/576fcda2e4fcb5ab5152b4d8/59491390bf629aaededd2343/5949140903596efa5bd13eb5/1500908133246/Medal-03+%281%29.png" width="50px" />
      <p>{props.title}</p>
      <img alt="avatar" src="https://www.iranketab.ir/Images/user.jpg" width="100px" />
      <p>{props.text}</p>
      <h6>From: {props.sender}</h6>
      <h6>To: {props.receiver}</h6>
    </CardBody>
  </Card>
)

export default AwardCard;