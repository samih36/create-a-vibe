import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'my cool new playlist',
      playlstTracks: []
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if(this.state.playlstTracks.find(savedTrack => savedTrack.id ===
      track.id)) {
        return;
      }
      this.setState({
        playlistTracks: this.state.playlstTracks.push(track)
      });
  }

  removeTrack(track) {
    let arr = this.state.playlstTracks.filter(song => song.id !== track.id);  
    this.setState({playlistTracks: arr}, () => {
      this.state.playlstTracks = arr;
      this.setState({playlistTracks: arr});
    });
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  search(searchTerm){
    Spotify.search(searchTerm).then(searchTracks => {
      this.setState({searchResults : searchTracks});
    });
  }

  savePlaylist(name) {
    // generate an array or uri values from the playlistTracks property
    let trackURIs = [];
    for(let i = 0; i < this.state.playlstTracks.length; i++) {
      trackURIs.push(this.state.playlstTracks[i].uri);
    }
      Spotify.savePlaylist(this.state.playlistName, trackURIs).then(response => {
        if(response) {
          this.setState({ playlistName: "New Playlist",
            playlistTracks : [] });
        }})
    }

  


  render() {
    return (
    <div>
      <div className='jamming'>
  <h1 className='jamming'>create a ~<span className="highlight">vibe</span>~</h1>
      </div>
  <div className="App">
    <SearchBar onSearch={this.search} />
    <div className="App-playlist">
      <SearchResults isRemoval='false' onAdd={this.addTrack} searchResults={this.state.searchResults} />
      <Playlist onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} playlistName={this.state.playlstName} playlistTracks={this.state.playlstTracks} />
    </div>
  </div>
</div>
    );
  }
};

export default App;

