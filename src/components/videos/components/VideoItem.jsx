import React from "react";
import "../../../styles/videos/components/VideoItem.scss";

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div className="item video-item" onClick={() => onVideoSelect(video)}>
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;
