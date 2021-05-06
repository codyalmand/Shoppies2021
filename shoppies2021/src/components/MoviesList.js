import React from 'react';
import Cards from './Cards'
import axios from 'axios';


class MoviesList extends React.Component {
    state = {
        moviesList: [''],
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
                    <input style={{
                    padding: '10px',
                    border: 'solid',
                    borderRadius:'20px',
                    width: '100%',
                    marginBottom: '8%',
                }}
                        placeholder="Search for movies"
                        onChange={this.handleChange}
                    />
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