import React, { Component } from "react";
import { Col, Container, Row, Form, FormGroup, Input, Label, Button, Card, CardBody, Progress, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import IpCard1 from './components/IpCard1';
import IpForm from './components/IpForm';
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      improvements: [],
      tiuser: "",
      type: "",
      comment: "",
      count: "",
      filterUser: "",
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  updateFilter = event => {
    this.setState({ filterUser: event.target.value });
  };
  getFilter = () => {
    // axios.get("/api/filter/" + this.state.filterUser)
    //   .then(response => {
    //     console.log(response)
    //   })
    axios.get("/api/filter/" + this.state.filterUser)
      .then(response => {
        // console.log(response)
        this.setState({
          improvements: response.data
        })
      })
  }

  updateTiuser = event => {
    this.setState({ tiuser: event.target.value });
  };

  updateType = event => {
    this.setState({ type: event.target.value });
  };

  updateCount = event => {
    this.setState({ count: event.target.value });
  };

  updateComment = event => {
    this.setState({ comment: event.target.value });
  };

  postData = () => {
    if (this.state.tiuser && this.state.comment && this.state.type && this.state.count) {
      axios.post("/api/improvement", {
        Type__c: this.state.type,
        Comment__c: this.state.comment,
        Tiny_Improvements_User__c: this.state.users.find(user => user.name === this.state.tiuser).id,
        Count__c: this.state.count
      }).then(response => {
        this.setState({ modal: false })
        // this.setState({
        //   awards: response.data
        // })
      })
    }
  }

  componentDidMount = () => {
    axios.get("/api/improvement")
      .then(response => {
        this.setState({
          improvements: response.data
        })
      })

    axios.get("/api/users")
      .then(response => {
        this.setState({
          users: response.data
        })
      })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col body className="text-center">
            <h1>
              🚧 👷 🚧
            </h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12">
            <Card>
              <CardBody className="mx-auto">
                <Button color="warning" onClick={this.toggle}>TINY IMPROVEMENT</Button>{''}
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>TINY IMPROVEMENT</ModalHeader>
                  <ModalBody>
                    <IpForm
                      users={this.state.users}
                      updateTiuser={this.updateTiuser}
                      updateType={this.updateType}
                      updateCount={this.updateCount}
                      updateComment={this.updateComment}
                      postData={this.postData}
                    />
                  </ModalBody>
                  <ModalFooter>
                  </ModalFooter>
                </Modal>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12">
            <Card>
              <CardBody className="mx-auto">
                <Form>
                  <FormGroup>
                    <Input type="select" onChange={this.updateFilter}>
                      <option> USER </option>
                      {this.state.users.map(element => <option>{element.name}</option>)}
                    </Input>
                    <br />
                    <Button color="warning" onClick={this.getFilter}>PROGRESS</Button>{''}
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12">
            <Progress striped color="warning" value={100} />
            <br />
            {this.state.improvements.map(elem => (
              <IpCard1 key={elem.id}
                type={elem.type__c}
                // tiuser={elem.tiny_improvements_user__r.Name}
                count={elem.count__c}
                comment={elem.comment__c} />
            ))}
          </Col>
        </Row>
      </Container >
    )
  }
}

export default App;