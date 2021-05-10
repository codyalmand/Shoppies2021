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
                    <small>Released Date: {props.Year}</small>
                </div>
                        <br></br>
                {props.children}
            </div>
        </div>
    );
}

export default Cards;