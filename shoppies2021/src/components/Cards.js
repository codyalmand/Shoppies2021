import React from 'react';

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

let Cards = (props) => {
    return (
        <div className="movie-card-container" style={style.cardContainer}>
            <div className="movie-info">
                <div>
                    <img src={props.poster} alt='Movie Poster' style={style.posterStyle}/>
                    <h3>{props.title}</h3>
                    <small>Released Date: {props.released}</small>
                </div>
                <p>Rating: {props.imdbRating} / 10</p>
                <p>{props.plot && props.plot.substr(0, 350)}</p>
                <div className="tags-container">
                    {props.genre &&
                        props.genre.split(', ').map(g => (
                            <span key={g}>{g}</span>
                        ))}
                        <br></br>
                </div>
                {props.children}
            </div>
        </div>
    );
}

export default Cards;