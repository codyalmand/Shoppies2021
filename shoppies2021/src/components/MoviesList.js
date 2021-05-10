import React from 'react';
import axios from 'axios';
import Cards from './Cards'
import MovieButton from "./MovieButton";
import DeleteButton from "./DeleteButton";
import MovTitle from './MovTitle';
import Banner from './Banner';
import NomTitle from './NomTitle';

// Dictates if the winning nominee will be visible
const [visible, setVisibility] = ("hidden");
const winner = () => {
    if (visible === "hidden") {
        setVisibility("visible");
    }
};
winner();

let NomData = JSON.parse(window.localStorage.getItem("nomineeKey")) || [];

class MoviesList extends React.Component {
    state = {
        searchTerm: '',
        movieData: [],
        nominees: []
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
    // search is updated per button press every 0.1 seconds
    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        });
        const timeOutId = setTimeout(() => {
            this.search();
        }, 100);
        return () => clearTimeout(timeOutId);
    };
    // limits 5 nominations, and alerts when trying a sixth selection
    nominateMovie = data => {
        if (this.state.nominees.length < 5) {
            NomData.push(data);
            console.log(data);
            console.log(this.setState)
            window.localStorage.setItem("nomineeKey", JSON.stringify(NomData))
            this.setState({
                nominees: [...this.state.nominees, data]
            });
        } else{
            alert("Only 5 nominees allowed!")
        }
    };
    // removes nomination from right column nomination list
    deleteMovie = data => {
        let newNomineeArray = this.state.nominees.filter(nominee => nominee.imdbID !== data.imdbID);
        this.setState({nominees: newNomineeArray});
        localStorage.clear();
        window.localStorage.setItem("nomineeKey", JSON.stringify(NomData))
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
                    {/* {Once 5 nominees are picked this banner will be displayed} */}
                        {this.state.nominees.length === 5 ? (
                        <Banner onClick={() => winner()} disabled={visible === "visible"}>
                            <h1 style={{
                                color: "white", 
                                visibility: `${visible}`,
                                }}>
                                <iframe src="https://giphy.com/embed/LPfGHdZ7jRmja01dr3" 
                                    width="300" height="150" frameBorder="0" class="giphy-embed" allowFullScreen>
                                </iframe>
                                <p>
                                    <a href="https://giphy.com/gifs/beeinspiredclothing-bee-b33-inspired-LPfGHdZ7jRmja01dr3"></a>
                                </p>
                                    {this.state.nominees[Math.floor(Math.random() * this.state.nominees.length)].Title} 
                                    <br/>
                                    {this.state.nominees[Math.floor(Math.random() * this.state.nominees.length)].Year}
                            </h1>
                        </Banner>
                            ) : (
                                null
                            )}
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
                        border: 'ridge',
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
                            Year = {movie.Year}
                            >
                            <MovieButton 
                                disabled={this.state.nominees.filter(nominee => nominee.imdbID === movie.imdbID).length === 1}
                                onClick={() => this.nominateMovie(movie)}
                             >
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
                            border: 'ridge',
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
                                    Year = {nominee.Year}
                                    >
                                    <DeleteButton onClick={() => this.deleteMovie(nominee)}>
                                        Remove
                                    </DeleteButton>
                                </Cards>
                            ))
                        ) : (
                        null
                        )
                        }
                    {/* {Once 5 nominees are picked this banner will be displayed} */}
                        {this.state.nominees.length === 5 ? (
                        <Banner onClick={() => winner()} disabled={visible === "visible"}>
                            <h1 style={{
                                color: "white", 
                                visibility: `${visible}`,
                                }}>
                                <iframe src="https://giphy.com/embed/LPfGHdZ7jRmja01dr3" 
                                    width="300" height="150" frameBorder="0" class="giphy-embed" allowFullScreen>
                                </iframe>
                                <p>
                                    <a href="https://giphy.com/gifs/beeinspiredclothing-bee-b33-inspired-LPfGHdZ7jRmja01dr3"></a>
                                </p>
                                    {this.state.nominees[Math.floor(Math.random() * this.state.nominees.length)].Title} 
                                    <br/>
                                    {this.state.nominees[Math.floor(Math.random() * this.state.nominees.length)].Year}
                            </h1>
                        </Banner>
                            ) : (
                                null
                            )}
                    </div>
                </div>
            </div>
        )
    }
}

export default MoviesList;