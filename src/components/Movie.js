import React, {Component} from 'react';

class Movie extends Component {
  render () {
    return (
      <ul className="movie">
        <li><a href={this.props.url}><h4>{this.props.name}</h4></a></li>
      </ul>
    )
  }
}

export default Movie;
