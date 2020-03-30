import React, { Component } from "react";

import youtube from "../api/youtube.js";
import SearchBar from "./SearchBar";
import VideoModule from "./videos/VideoModule";

class App extends Component {
  //* App state
  state = {
    videos: [],
    selectedVideo: null,
  };

  //* Set default search term
  componentDidMount() {
    this.onTermSubmit("cats");
  }

  //* User enters a search term
  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items.slice(1),
      selectedVideo: response.data.items[0],
    });
  };

  //[(Callback)] User selected video
  onVideoSelect = video => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    return (
      <div className="app ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoModule appState={this.state} onVideoSelect={this.onVideoSelect} />
      </div>
    );
  }
}

export default App;
