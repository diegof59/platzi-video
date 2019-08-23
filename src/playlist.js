import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Media from './media';
import './css/playlist.css';

class Playlist extends Component {

  render(){

    const playlist = this.props.data.categories[0].playlist;

    return(
      <div className="Playlist">
      {
        playlist.map(
          (item) => {
            return <Media
              {...item}
            />
          }
        )
      }
      </div>
      )
    }
  }

  export default Playlist;