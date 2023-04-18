import React from 'react';

function VideoPlayer(props) {
    return (
    <video controls>
        <source src={props.src} type={props.type} />
    </video>
    );
}

export default VideoPlayer;