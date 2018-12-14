import React, { Component } from 'react';
import YTSearch from "youtube-api-search";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from './components/VideoDetail';


const API_KEY = 'AIzaSyAOqdn1U5rGbBXs7WRDYCagIoPxv0nj-JQ';


class App extends Component {
 
constructor(props){
  super(props);
  this.state = {
    videos: [],
    selectedVideo: null
  }

  this.videoSearch('messi');
  
}

videoSearch(term){
  YTSearch({ key: API_KEY, term: term}, (videos) => {
    this.setState({
      videos: videos,
      selectedVideo: videos[0]     
    });
  });
}

handleSelectedVideo = (selectedVideo) => { this.setState({ selectedVideo: selectedVideo})}
  
  render() {
    //console.log(this.state.videos)
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <SearchBar onSerachTermChange={(term) => {this.videoSearch(term)}}/>
          </div>
        </div>
        

        <div className="row">
          <div className="col-md-8">
            <VideoDetail video={this.state.selectedVideo}/>
          </div>
          <div className="col-md-4">
            <VideoList videos={this.state.videos} onSelectedVideo={this.handleSelectedVideo}/>
          </div>
        </div>
        
       
      </div>
    );
  }
}

export default App;
