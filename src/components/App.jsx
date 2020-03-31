import React, {Component} from "react";
import {Backdrop, CircularProgress} from "@material-ui/core";

import youtube from "../api/youtube.js";
import SearchBar from "./SearchBar";
import VideoModule from "./videos/VideoModule";

class App extends Component {
    //* App state
    state = {
        videos: [],
        selectedVideo: null,
        isLoading: false
    };

    //* Set default search term
    componentDidMount() {
        this.onTermSubmit("asfdkgjnngaengiaebnbnr");
    }

    //* User enters a search term
    onTermSubmit = async term => {
        this.setState({isLoading: true});
        const response = await youtube.get("/search", {
            params: {
                q: term,
            },
        });

        this.setState({
            videos: response.data.items.slice(1),
            selectedVideo: response.data.items[0],
            isLoading: false
        });
    };

    //[(Callback)] User selected video
    onVideoSelect = video => {
        this.setState({
            selectedVideo: video,
        });
    };

    render() {
        let loadingDom = "";
        if (this.state.isLoading) {
            loadingDom = <Backdrop open={!this.state.isLoading}><CircularProgress color="inherit"/></Backdrop>
        }

        return (
            <div className="app ui container">
                {loadingDom}
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <VideoModule appState={this.state} onVideoSelect={this.onVideoSelect}/>
            </div>
        );
    }
}

export default App;
