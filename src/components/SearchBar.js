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

        const search_bar_container = {
            display: 'flex',
            justifyContent: 'flex-start',
            marginTop: 20

        }
        return(
            <div style={search_bar_container} className="input-group-lg">
                <input type='text'
                className='form-control mb-5'
                value={this.state.term}
                placeholder="Type What You Want to Watch...."
                onChange={(event) => {this.handleChange(event.target.value)}}/>
            </div>
            
        );
    }

}

export default SearchBar;