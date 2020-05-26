import React from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);

    }
    search() {
        if(this.state.term) {
        this.props.onSearch(this.state.term);
    } 
}
    handleTermChange(event) {
        this.setState({term: event.target.value});
    }

    handleKeyUp(event) {
        if(event.keyCode === 13) {
            this.search();
        }
    }


    render() {
        return (
            <div onKeyUp={this.handleKeyUp} className="SearchBar">
  <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
  <button  onClick={this.search} className="SearchButton">SEARCH</button>
</div>
        )
    }
}

export default SearchBar;
