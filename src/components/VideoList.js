import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) =>{
   const VideoListItems =  props.videos.map((video) =>{
        return <VideoListItem video={video} key={video.etag}/>
    })
    return(
        <div className="container">
            <ul className='list-unstyled'>
                {VideoListItems}
            </ul>
        </div>
        
    );
}

export default VideoList;