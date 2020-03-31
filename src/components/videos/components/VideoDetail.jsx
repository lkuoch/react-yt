import React from "react";
import notfound from "../../../images/notfound.gif"

const VideoDetail = ({selectedVideo}) => {
    if (selectedVideo !== undefined && selectedVideo !== null) {
        const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

        const {description, title} = selectedVideo.snippet;

        return (
            <div>
                <div className="ui embed">
                    <iframe title={description} src={videoSrc} frameBorder="0"/>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        );
    } else {
        return (<div><img height={600} width={1111} src={notfound} alt="not found"/></div>)
    }
};

export default VideoDetail;
