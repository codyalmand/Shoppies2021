import React from 'react';

const style = {
    row: {
        padding: '10px',
        marginBottom: '20px',
        maxWidth: '3000px',
    }
}

const Searchbar = () => {
    return (
        <input style={style.row} class="form-control mr-sm-2" type="search" placeholder="Search Movies" aria-label="Search"></input>
    )
}

export default Searchbar;