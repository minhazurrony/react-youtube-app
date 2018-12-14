import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from "youtube-api-search";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from './components/VideoDetail';
import './style.css';



const API_KEY = 'AIzaSyAOqdn1U5rGbBXs7WRDYCagIoPxv0nj-JQ';


class App extends Component {
 
constructor(props){
  super(props);
  this.state = {
    videos: [],
    selectedVideo: null
  }

  this.videoSearch('luis fonsi');
  
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
    const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);

    const mainHeading = {
      textAlign: 'center',
      backgroundColor: 'red',
      color: 'white',
      padding: '10px',
      margin: 0
    }
    return (
      <div className="container">
        <h1 style={mainHeading}>React YouTube App</h1>
        <div className="row">
          <div className="col-md-12">
            <SearchBar onSerachTermChange={videoSearch}/>
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
