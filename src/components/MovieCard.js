import React from 'react'
import { addFavorite, removeFromFavorite} from '../actions';

class MovieCard extends React.Component {

  handeFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavorite(movie));
  }

  handeUnfavouriteClick =() =>{
    const { movie } = this.props;
    this.props.dispatch(removeFromFavorite(movie));
  }

    render(){
        const {movie, isFavorite} = this.props;
        return (
            <div className="movie-card">
              <div className="left">
                    <img alt="movie-poster" src={movie.Poster} />
              </div>
              <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {
                          isFavorite
                          ?<button className="unfavourite-btn" onClick={this.handeUnfavouriteClick}>Unfavourite</button>
                          :<button className="favourite-btn" onClick={this.handeFavouriteClick}>Favourite</button>
                        }
                    </div>
              </div>
            </div>
          );
    }
}

export default MovieCard;
