import React from 'react';
import axios from 'axios';
import MovieButton from './MovieButton';

const style = {
    cardContainer: {
        // maxWidth: '60%',
        // maxHeight: '60%',
    },
    posterStyle: {
        maxWidth: '30%',
        maxHeight: '30%',
    }
}

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
            <div className="movie-card-container" style={style.cardContainer}>
                <div className="movie-info">
                    <div>
                        <img src={Poster} alt='Movie Poster' style={style.posterStyle}/>
                        <h3>{Title}</h3>
                        <small>Released Date: {Released}</small>
                    </div>
                    <p>Rating: {imdbRating} / 10</p>
                    <p>{Plot && Plot.substr(0, 350)}</p>
                    <div className="tags-container">
                        {Genre &&
                            Genre.split(', ').map(g => (
                                <span key={g}>{g}</span>
                            ))}
                            <MovieButton/>
                            <br></br>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;