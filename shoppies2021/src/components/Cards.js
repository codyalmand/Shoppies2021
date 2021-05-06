import React from 'react';
import axios from 'axios';


class Cards extends React.Component {
    state = {
        movieData: {}
    };

    componentDidMount() {
        const apikey = 'f99ae317';
        axios.get(
                `https://www.omdbapi.com/?apikey=${apikey}&i=${this.props.movieID}&plot=full`
            )
            .then(res => res.data)
            .then(res => {
                this.setState({ movieData: res });
            });
    }

    render() {
        const {
            Title,
            Released,
            Genre,
            Plot,
            Poster,
            imdbRating
        } = this.state.movieData;

        if (!Poster || Poster === 'N/A') {
            return null;
        }

        return (
            <div className="movie-card-container">
                <div className="movie-info">
                    <div>
                    <img src={Poster} alt='Movie Poster'/>
                        <h1>{Title}</h1>
                        <small>Released Date: {Released}</small>
                    </div>
                    <h4>Rating: {imdbRating} / 10</h4>
                    <p>{Plot && Plot.substr(0, 350)}</p>
                    <div className="tags-container">
                        {Genre &&
                            Genre.split(', ').map(g => (
                                <span key={g}>{g}</span>
                            ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;