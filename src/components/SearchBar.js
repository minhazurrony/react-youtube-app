import React, { Component } from 'react';

class SearchBar extends Component{
    state = {
        term: ''
    }

    handleChange = (event) => {
        this.setState({ term: event.target.value})
    }
    render(){
        return(
            <div className='container'>
                <input type='text' className='form-control mb-5' value={this.state.term} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default SearchBar;