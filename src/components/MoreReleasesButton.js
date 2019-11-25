import React, {Component} from 'react';

class MovieReleasesButton extends Component {
  render(){
    return(
      <div className="more-releases-button">
        <a  href="https://www.imdb.com/calendar/?region=gb"><button>View more upcoming releases >></button></a>
      </div>
    )
  }
}

export default MovieReleasesButton;
