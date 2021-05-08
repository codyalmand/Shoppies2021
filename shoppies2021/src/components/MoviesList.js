import React from 'react';
import axios from 'axios';
import Cards from './Cards'
import MovieButton from "./MovieButton";
import DeleteButton from "./DeleteButton";


class MoviesList extends React.Component {
    state = {
        searchTerm: '',
        movieData: [],
        nominees:[],
    };

    search = () => {
        const apikey = 'f99ae317';
        axios.get(
                `https://www.omdbapi.com/?apikey=${apikey}&s=${this.state.searchTerm}&plot=full`
            )
            .then( res => {
                this.setState({ movieData: res.data.Search })
            })
        };

        handleChange = event => {
            this.setState({
                searchTerm: event.target.value
            });
            const timeOutId = setTimeout(() => {
                this.search();
            }, 500);
            return () => clearTimeout(timeOutId);
        };

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
    }

    render() {
        const { movieData, nominees } = this.state
            return (
                <div className="row">
                    <div className="col">
                        <form onChange={this.handleChange}>
                            <input style={
                                {
                            padding: '10px',
                            border: 'solid',
                            borderRadius:'20px',
                            width: '100%',
                            marginBottom: '5%',
                            }
                        }
                            placeholder="Search for movies"
                            onChange={this.handleChange}
                            />
                        </form>
                    </div>
                    <div className="row">
                    <div className="col-12-sm col-md-4">
                        {movieData ? (movieData.map(movie => (
                                             <Cards 
                                    id = {movie.imdbID} 
                                    key = {movie.imdbID} 
                                    poster = {movie.Poster} 
                                    title = {movie.Title} 
                                    released = {movie.Released} 
                                    imdbID = {movie.imdbID} 
                                    plot = {movie.Plot} 
                                    genre = {movie.Genre}>
                                    <MovieButton onClick={() => this.nominateMovie(movie)}>
                                        Nominate This!
                                    </MovieButton>
                                </Cards>
                    ))
                ) : (
                    <p>
                        We couldn't find any movie from that search, please try again.
                    </p>
                )}
            </div>
            <div className="col-12-sm col-md-8">
                        {nominees.length > 0 ? (
                            nominees.map(nominee => (
                                <Cards 
                                    id={nominee.imdbID} 
                                    key={nominee.imdbID} 
                                    poster={nominee.Poster} 
                                    title={nominee.Title} 
                                    released={nominee.Released} 
                                    imdbID={nominee.imdbID} 
                                    plot={nominee.Plot} 
                                    genre={nominee.Genre}>
                                    <DeleteButton/>
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