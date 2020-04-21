import React, {Component} from "react";
import VideoDetail from "./components/VideoDetail";
import VideosList from "./components/VideosList";

class VideoModule extends Component {
    render() {
        return (
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail selectedVideo={this.props.appState.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideosList videos={this.props.appState.videos} onVideoSelect={this.props.onVideoSelect}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoModule;
