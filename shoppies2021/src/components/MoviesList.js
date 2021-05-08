import React from 'react';
import axios from 'axios';
import Cards from './Cards'
import MovieButton from "./MovieButton";
import DeleteButton from "./DeleteButton";
import MovTitle from './MovTitle';
import NomTitle from './NomTitle';

class MoviesList extends React.Component {
    state = {
        searchTerm: '',
        movieData: [],
        nominees: [],
    };

    search = () => {
        const apikey = 'f99ae317';
        axios.get(
            `https://www.omdbapi.com/?apikey=${apikey}&s=${this.state.searchTerm}&plot=full`
        )
            .then(res => {
                this.setState({ movieData: res.data.Search })
            })
    };
    // search is updated per button press every 0.5 seconds
    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        });
        const timeOutId = setTimeout(() => {
            this.search();
        }, 500);
        return () => clearTimeout(timeOutId);
    };
    // limits 5 nominations, and alerts when trying a sixth selection
    nominateMovie = data => {
        if (this.state.nominees.length < 5) {
            console.log(data);
            this.setState({
                nominees: [...this.state.nominees, data]
            });
            console.log(this.state.nominees);
        } else {
            alert("You've already made 5 nominations...")
        }
    };

    render() {
        const { movieData, nominees } = this.state
        return (
            // styling is behind searchbar
            <div className="row" style={{
                    backgroundColor: '#010101',
                    color: '#fff',
                }}>
                {/* styling is inside searchbar */}
                <div className="col">
                    <form onChange={this.handleChange}>
                        <input style={{
                                padding: '10px',
                                border: 'solid',
                                borderRadius: '20px',
                                width: '50%',
                                marginBottom: '5%',
                                backgroundColor: '#fff',
                            }}
                            placeholder="Search for movies"
                            onChange={this.handleChange}/>
                    </form>
                </div>
            {/* displays left column movie data + button */}
            <div className="row" style={{
                    margin: '.5%',
                }}>
                <div className="col" style={{
                        backgroundColor: '#84FFFE',
                        color: '#010101',
                        textAlign: 'center',
                        maxWidth: '100%',
                        border: 'solid',
                        borderColor: '#B684FF',
                        borderRadius: '25px',
                        margin: '2%',
                    }}>
                        <MovTitle/>
                    {movieData ? (movieData.map(movie => (
                        <Cards
                            id = {movie.imdbID}
                            key = {movie.imdbID}
                            Poster = {movie.Poster}
                            Title = {movie.Title}
                            Released = {movie.Released}
                            imdbID = {movie.imdbID}
                            Plot = {movie.Plot}
                            Genre = {movie.Genre}>
                            <MovieButton onClick={() => this.nominateMovie(movie)}>
                                Nominate Movie
                            </MovieButton>
                        </Cards>
                    ))
                        ) : (
                    // this displays on left column when there are no search results
                            <p style={{
                                color: '#010101',
                                width: '100$',
                                fontSize: '30px',
                            }}>
                                No Movies Found
                            </p>
                        )}
                </div>
                    {/* right nominations column */}
                    <div className="col" style={{
                            backgroundColor: '#9B69FF',
                            color: '#fff',
                            border: 'solid',
                            borderColor: '#84FFFE',
                            borderRadius: '25px',
                            margin: '2%',
                            marginRight: '2%',
                        }}>
                            <NomTitle/>
                        {nominees.length > 0 ? (
                            nominees.map(nominee => (
                                <Cards
                                    id=  {nominee.imdbID}
                                    key = {nominee.imdbID}
                                    Poster = {nominee.Poster}
                                    Title = {nominee.Title}
                                    Released = {nominee.Released}
                                    imdbID = {nominee.imdbID}
                                    Plot = {nominee.Plot}
                                    Genre = {nominee.Genre}>
                                    <DeleteButton>
                                        Remove
                                    </DeleteButton>
                                </Cards>
                            ))
                        ) : (
                        null
                        )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MoviesList;