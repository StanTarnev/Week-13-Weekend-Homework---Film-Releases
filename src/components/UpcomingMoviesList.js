import React, {Component} from 'react';
import Movie from './Movie';

class UpcomingMoviesList extends Component {
  render () {
    const movieNodes = this.props.data.map(movie => {
      return(
        <Movie url={movie.url} key={movie.id} name={movie.name}/>
      )
    })

    return (
      <div className="upcoming-movies-list">
        {movieNodes}
      </div>
    )
  }
}

export default UpcomingMoviesList;
