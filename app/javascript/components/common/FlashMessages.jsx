import React from 'react';
import update from 'immutability-helper';
import { CSSTransitionGroup } from 'react-transition-group'
import Alert from "./Alert";

class FlashMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: props.messages };

    window.flash_messages = this;
  }

  addMessage(message) {
    const messages = update(this.state.messages, { $push: [message] });
    this.setState({ messages: messages });
  }

  removeMessage(message) {
    const index = this.state.messages.indexOf(message);
    const messages = update(this.state.messages, { $splice: [[index, 1]] });
    this.setState({ messages: messages });
  }

  render () {
    const { messages } = this.state;

    // console.log(messages);

    const alerts = messages.map( message =>
      <Alert 
        key={ message.id } 
        message={ message }
        onClose={ () => this.removeMessage(message) } 
      />
    );

    return(
      <CSSTransitionGroup
        transitionName='alerts'
        transitionEnter={false}
        transitionLeaveTimeout={500}>
        { alerts }
      </CSSTransitionGroup>
    );
  }
}
export default FlashMessages;

// FlashMessages.propTypes = {
//   messages: React.PropTypes.array.isRequired
// };