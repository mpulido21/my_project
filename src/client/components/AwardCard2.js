import React from "react";
import { Col, Container, Row, Button, Card, CardBody } from "reactstrap";

const AwardCard2 = props => (
  <Card>
    <CardBody>
      <h5 body className="text-center">WHAT: {props.type}</h5>
      {/* <p>WHEN: {props.text}</p> */}
      <p>COUNT: {props.count}</p>
      <p>COMMENT: {props.comment}</p>
      <img alt="award" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Nerd_with_Glasses_Emoji_2a8485bc-f136-4156-9af6-297d8522d8d1_large.png?v=1483276509" width="50px" />
    </CardBody>
  </Card>
)

export default AwardCard2;