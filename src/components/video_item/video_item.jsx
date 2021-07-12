import React from 'react';

const VideoItem = (props) => {
    const { title } = props.video.snippet;
    return <h1>{title}</h1>;
};

export default VideoItem;
