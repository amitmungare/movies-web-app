import React from 'react'
import {data} from '../data'
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies, setShowFavorites} from '../actions'

class App extends React.Component{

  componentDidMount(){
    const {store } = this.props;

    store.subscribe(() =>{
      this.forceUpdate();
    })

    store.dispatch(addMovies(data));

  }

  isMovieFavorite = (movie)=>{
    const {favourites} = this.props.store.getState();
    const index = favourites.indexOf(movie);

    if(index !== -1){
      return true;
    }
    return false;
  }

  onChangeTab = (val) =>{
      this.props.store.dispatch(setShowFavorites(val));
  }

  render() {
    
    const { list, favourites, showFavourites }= this.props.store.getState();

    const displayMovies = showFavourites ? favourites: list;

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
              <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={ () => this.onChangeTab(false)}>Movies</div>
              <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={ () => this.onChangeTab(true)}>Favorites</div>
          </div>
  
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard 
                movie={movie} 
                key={`movies-${index}`} 
                dispatch={this.props.store.dispatch}
                isFavorite={this.isMovieFavorite(movie)} 
              />
            ))}
          </div>
          {displayMovies.length === 0 ? <div className="no-movies">No Favorite movies</div> : null }
        </div>
      </div>
    );
  }
  
}

export default App;
