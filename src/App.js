import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {};
  }

  componentWillMount(){
    this.setState({
      foo: 123,
      bar: 456
    }, () => this.callback());
  }

  callback(){
    this.props.cb(this.state);
  }

  render() {
    return null;
  }
}

export default App;
