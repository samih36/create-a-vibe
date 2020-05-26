import React from 'react';
import './Tracklist.css';
import Track from '../Track/Track';
import SearchResults from '../SearchResults/SearchResults';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
    {this.props.tracks.map(track => 
        <Track onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} onAdd={this.props.onAdd} track={track} key={Math.random()} />
    )}
</div>
        );
    }

}

export default TrackList;