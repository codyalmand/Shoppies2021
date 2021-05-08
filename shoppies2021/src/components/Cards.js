import React from 'react';

const style = {
    cardContainer: {
        // maxWidth: '60%',
        // maxHeight: '60%',
    },
    posterStyle: {
        maxWidth: '15%',
        maxHeight: '15%',
    }
}

let Cards = (props) => {
    return (
        <div className="movieCardContainer" style={style.cardContainer}>
            <div className="movieInfo">
                <div>
                    <img src={props.Poster} alt='Movie Poster' style={style.posterStyle}/>
                    <h3>{props.Title}</h3>
                    <small>Released Date: {props.Released}</small>
                </div>
                <p>Rating: {props.Rating} / 10</p>
                <p>{props.Plot && props.Plot.substr(0, 350)}</p>
                <div className="tagsContainer">
                    {props.Genre &&
                        props.Genre.split(', ').map(g => (
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