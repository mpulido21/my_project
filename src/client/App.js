import React, { Component } from "react";
import { Col, Container, Row, Form, FormGroup, Input, Label, Button, Card, CardBody, Progress } from "reactstrap";
import AwardCard from './components/AwardCard';
// import AwardCard1 from './components/AwardCard1';
import axios from "axios";
import KudosForm from './components/KudosForm';

class App extends Component {
  state = {
    users: [],
    awards: [],
    sender: "",
    receiver: "",
    comment: "",
    title: ""
  }

  updateSender = event => {
    this.setState({ sender: event.target.value });
  };

  updateTitle = event => {
    this.setState({ title: event.target.value });
  };

  updateReceiver = event => {
    this.setState({ receiver: event.target.value });
  };

  updateComment = event => {
    this.setState({ comment: event.target.value });
  };

  postData = () => {
    if (this.state.title && this.state.comment && this.state.receiver && this.state.sender) {
      axios.post("/api/kudos", {
        Name: this.state.title,
        Comment__c: this.state.comment,
        Receiver__c: this.state.users.find(user => user.name === this.state.receiver).id,
        Sender__c: this.state.users.find(user => user.name === this.state.sender).id
      }).then(response => {
        // this.setState({
        //   awards: response.data
        // })
      })
    }
  }

  componentDidMount = () => {
    axios.get("/api/kudos")
      .then(response => {
        this.setState({
          awards: response.data
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
          <Col md="12">
            <h5>
              acCOUNTable
            </h5>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12">
            <Card>
              <CardBody className="mx-auto">
                <Button color="warning">TINY IMPROVEMENT</Button>{''}
              </CardBody>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12">
            <KudosForm
              users={this.state.users}
              updateSender={this.updateSender}
              updateReceiver={this.updateReceiver}
              updateTitle={this.updateTitle}
              updateComment={this.updateComment}
              postData={this.postData}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12">
            <Card>
              <CardBody className="mx-auto">
                <Button color="warning">PROGRESS</Button>{''}
              </CardBody>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12" lg="4">
            <Progress striped color="warning" value={75} />
            <br />
            {this.state.awards.map(elem => (
              <AwardCard title={elem.name}
                key={elem.id}
                sender={elem.sender__r.Name}
                receiver={elem.receiver__r.Name}
                text={elem.comment__c} />
            ))}
          </Col>
          <Col md="12" lg="4">
            <Progress striped color="warning" value={25} />
            <br />
            {this.state.awards.map(elem => (
              <AwardCard title={elem.name}
                key={elem.id}
                sender={elem.sender__r.Name}
                receiver={elem.receiver__r.Name}
                text={elem.comment__c} />
            ))}
          </Col>
          <Col md="12" lg="4">
            <Progress striped color="warning" value={55} />
            <br />
            {this.state.awards.map(elem => (
              <AwardCard title={elem.name}
                key={elem.id}
                sender={elem.sender__r.Name}
                receiver={elem.receiver__r.Name}
                text={elem.comment__c} />
            ))}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;