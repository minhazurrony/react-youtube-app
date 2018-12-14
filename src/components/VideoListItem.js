import React from 'react';

const VideoListItem = (props) =>{
    const video = props.video;
    const imgUrl = video.snippet.thumbnails.default.url;
    return(
        <li onClick={() => props.onSelectedVideo(video)} className='list-group-item'>
            <div className="media">
                <img src={imgUrl} className="mr-3" alt="video-thumbnail"/>
                <div className="media-body">
                    <p>{video.snippet.title}</p>
                </div> 
            </div>
        </li>
    );
}

export default VideoListItem;