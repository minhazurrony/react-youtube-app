import React, { Component } from 'react';
import YTSearch from "youtube-api-search";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList"


const API_KEY = 'AIzaSyAOqdn1U5rGbBXs7WRDYCagIoPxv0nj-JQ';


class App extends Component {
 
constructor(props){
  super(props);
  this.state = {
    videos: []
  }

  YTSearch({ key: API_KEY, term: 'messi'}, (videos) =>{
    this.setState({videos});
  });
}
 
  
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
