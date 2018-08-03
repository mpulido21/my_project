import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const KudosForm = props => (
  <Form>
    <FormGroup>
      {/* <Label>USER</Label> */}
      <Input type="select" onChange={props.updateSender}>
        <option>WHO</option>
        {props.users.map(element => <option>{element.name}</option>)}
      </Input>
      {/* <Label>TYPE</Label> */}
      <br />
      <Input type="select" onChange={props.updateReceiver}>
        <option>WHAT</option>
        {props.users.map(element => <option>{element.name}</option>)}
      </Input>
    </FormGroup>
    <FormGroup>
      <Input type="text" placeholder="COUNT" onChange={props.updateTitle} />
    </FormGroup>
    <FormGroup>
      <Input
        type="textarea"
        placeholder="COMMENT"
        onChange={props.updateComment}
      />
    </FormGroup>
    <FormGroup>
      <Button onClick={props.postData}> Submit </Button>
    </FormGroup>
  </Form>
)

export default KudosForm;