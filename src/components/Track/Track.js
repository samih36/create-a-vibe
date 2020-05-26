import React from 'react';
import './Track.css';

// let isRemoval = true;

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }
    
    renderAction() {
        if(this.props.isRemoval === 'true') {
            return <button onClick={this.removeTrack} className='Track-action'>-</button>
        } else {
            return <button onClick={this.addTrack} className='Track-action'>+</button>
        }
    }
    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
        
    }




    render() {
        return (
            <div className="Track">
  <div className="Track-information">
    <h3 className='Track-name'>{this.props.track.name}</h3>
    <p>{this.props.track.artist} | {this.props.track.album} </p>
  </div>
  <div className="Track-action">{this.renderAction()}</div>
</div>
        );

    }
}

export default Track;