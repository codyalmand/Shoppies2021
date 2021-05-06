import React from 'react';
import Cards from './Cards'
import axios from 'axios';


class MoviesList extends React.Component {
    state = {
        moviesList: ['tt2294629'],
        searchTerm: ''
    };

    search = event => {
        event.preventDefault();
        const apikey = 'f99ae317';
        axios.get(
                `https://www.omdbapi.com/?apikey=${apikey}&s=${this.state.searchTerm}&plot=full`
            )
            .then(res => res.data)
            .then(res => {
                if (!res.Search) {
                    this.setState({ moviesList: [] });
                    return;
                }

                const moviesList = res.Search.map(movie => movie.imdbID);
                this.setState({
                    moviesList
                });
            });
    };

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        });
    };

    render() {
        const { moviesList } = this.state;

        return (
            <div>
                <form onSubmit={this.search}>
                    <input
                        placeholder="Search for a movie"
                        onChange={this.handleChange}
                    />
                    <button type="submit">
                        <i className="fa fa-search" />
                    </button>
                </form>
                {moviesList.length > 0 ? (
                    moviesList.map(movie => (
                        <Cards movieID={movie} key={movie} />
                    ))
                ) : (
                    <p>
                        We couldn't find any movie from that search, please try again.
                    </p>
                )}
            </div>
        );
    }
}

export default MoviesList;