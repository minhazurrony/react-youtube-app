import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) =>{
   const VideoListItems =  props.videos.map((video) =>{
        return <VideoListItem video={video} key={video.etag} onSelectedVideo={props.onSelectedVideo}/>
    })
    return(
        <ul className="list-group">
            {VideoListItems}
        </ul>
    );
}

export default VideoList;