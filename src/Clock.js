import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {current: new Date()}
    }
    
    componentDidMount() {
        this.handleStart();
    }

    componentWillUnmount() {
        this.handleStop();
    }

    changeCurrent = () => {
        this.setState({current: new Date()});
    }

    handleStart = () => {
        this.timer = setInterval(()=> {
            this.changeCurrent();
        }, 1000);
    }

    handleStop = () => {
        clearInterval(this.timer);
    }

    render() {
      return (
        <div>
            <h1>Timer</h1>
            <div>{this.props.location}</div>
            <div>{this.state.current.toLocaleTimeString()}</div>
            <button onClick={this.handleStop}>stop</button>
            <button onClick={this.handleStart}>start</button>
        </div>
      );
    }
}