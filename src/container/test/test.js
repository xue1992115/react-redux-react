import React from 'react'
import {  Radio } from 'antd-mobile'

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dollars: 10
    }
  }

  componentDidMount() {
    // Add custom event via `addEventListener`
    //
    // The list of supported React events does include `mouseleave`
    // via `onMouseLeave` prop
    //
    // However, we are not adding the event the `React way` - this will have
    // effects on how state mutates
    //
    // Check the list here - https://facebook.github.io/react/docs/events.html
    document.getElementById('testButton').addEventListener('mouseleave', this.onMouseLeaveHandler);
    // Add JS timeout
    //
    // Again,outside React `world` - this will also have effects on how state
    // mutates
    setTimeout(this.onTimeoutHandler, 10000);

    // Make AJAX request
    fetch('https://api.github.com/users')
      .then(this.onAjaxCallback);
  }

  onClickHandler = () => {
    console.log('State before (_onClickHandler): ' + JSON.stringify(this.state));
    this.setState({
      dollars: this.state.dollars + 10
    });
    console.log('State after (_onClickHandler): ' + JSON.stringify(this.state));
  }

  onMouseLeaveHandler = () => {
    console.log('State before (mouseleave): ' + JSON.stringify(this.state));
    this.setState({
      dollars: this.state.dollars + 20
    });
    console.log('State after (mouseleave): ' + JSON.stringify(this.state));
  }

  onTimeoutHandler = () => {
    console.log('State before (timeout): ' + JSON.stringify(this.state));
    this.setState({
      dollars: this.state.dollars + 30
    });
    console.log('State after (timeout): ' + JSON.stringify(this.state));
  }

  onAjaxCallback = (err, res) => {
    if (err) {
      console.log('Error in AJAX call: ' + JSON.stringify(err));
      return;
    }

    console.log('State before (AJAX call): ' + JSON.stringify(this.state));
    this.setState({
      dollars: this.state.dollars + 40
    });
    console.log('State after (AJAX call): ' + JSON.stringify(this.state));
  }

  render() {
    console.log('State in render: ' + JSON.stringify(this.state));

    return (
       <button
         id="testButton"
         onClick={this.onClickHandler}>
         'Click me'
      </button>
    );
  }
}

export default Test;