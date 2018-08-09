import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const IpForm = props => (
  <Form>
    <FormGroup>
      <Input type="select" onChange={props.updateTiuser}>
        <option>WHO</option>
        {props.users.map(element => <option>{element.name}</option>)}
      </Input>
      <br />
      <Input
        type="text"
        placeholder="TYPE"
        onChange={props.updateType}
      />
    </FormGroup>
    <FormGroup>
      <Input type="text"
        placeholder="COUNT"
        onChange={props.updateCount}
      />
    </FormGroup>
    <FormGroup>
      <Input
        type="textarea"
        placeholder="COMMENT"
        onChange={props.updateComment}
      />
    </FormGroup>
    <FormGroup>
      <Button onClick={props.postData} color="warning"> Submit </Button>
    </FormGroup>
  </Form>
)

export default IpForm;