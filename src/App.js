import React, { Component } from 'react';

import Video from './components/Video';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchVideos();
  }

  state = {
    response: null
  }

  async fetchVideos() {
    const result = await fetch('https://www.scorebat.com/video-api/v1/');
    const response = await result.json();
    this.setState({ response });
  }

  render() {
    const { response } = this.state;
    if (!response) return null;
    return <Video videoList={response} />
  }
}

export default App;
