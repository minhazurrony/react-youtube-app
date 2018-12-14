import React, { Component } from 'react';

class SearchBar extends Component{
    state = {
        term: ''
    }

    handleChange = (term) => {
        this.setState({ term: term});
        this.props.onSerachTermChange(term);
    }
    render(){
        return(
            <input type='text' className='form-control mb-5' value={this.state.term} onChange={(event) => {this.handleChange(event.target.value)}}/>
        );
    }
}

export default SearchBar;