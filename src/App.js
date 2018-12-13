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
    videos: []
  }

  YTSearch({ key: API_KEY, term: 'luis fonsi'}, (videos) =>{
    this.setState({videos});
  });
}
  
  render() {
    console.log(this.state.videos)
    return (
      <div className="container">
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
