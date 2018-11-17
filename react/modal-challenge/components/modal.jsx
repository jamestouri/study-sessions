import React from 'react';
import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';


class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal1: <Modal1 />,
      modal2: <Modal2 />,
      modal3: <Modal3 />
    };

  }

  render() {
    const {modal} = this.props;

    return (

      <div>
        <button onClick={() => this.props.open('modal1')}>Modal 1</button>
        <button onClick={() => this.props.open('modal2')}>Modal 2</button>
        <button onClick={() => this.props.open('modal3')}>Modal 3</button>
        <button onClick={() => this.props.close()}>Close Modal</button>

        <div>
          {this.state[modal]}
        </div>
      </div>

    );
  }
}

export default Modal;
