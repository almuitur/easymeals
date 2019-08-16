import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';


class ModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Container>
        <Button onClick={this.toggle}>See Meal</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Meal</ModalHeader>
          <ModalBody>
            {/* <img className="selectIntolerance-img" src={require('../img/lactose.png')} alt="lactose" />  */}
              <p>Some text</p>
            (...)
          </ModalBody>
          <ModalFooter>
            <Button color="pink">Edit meal</Button>
            <Button color="pink">Generate new meal</Button>
            <Button color="grey" onClick={this.toggle}>Close</Button>{' '}
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default ModalPage;