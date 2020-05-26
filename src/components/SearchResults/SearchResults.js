import React from 'react'
import './SearchResults.css';
import TrackList from '../TrackList/Tracklist'


class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
  <h2>Results</h2>
  <TrackList isRemoval={this.props.isRemoval} onAdd={this.props.onAdd} 
  tracks={this.props.searchResults}/>
</div>
        );
    }
}

export default SearchResults;