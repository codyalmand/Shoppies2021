import React from 'react';
import MoviesList from './MoviesList';
import NomTitle from './NomTitle';
import NomList from './NomList';

const style = {
    row: {
        textAlign: 'center',
        // marginLeft: '250px',
        // marginRight: '250px',
    },
    containerLeft: {
        backgroundColor: '#59FFFC',
        display: 'grid',
        border: 'solid',
        borderRadius: '30px',
        padding: '20px',
        margin: '10px',
        maxWidth: '100%',
    },
    containerRight: {
        backgroundColor: '#BF87FF',
        display: 'grid',
        border: 'solid',
        borderRadius: '30px',
        margin: '10px',
        maxWidth: '100%',
    }
}

const Layout = () => {
    return (
        <MoviesList/>
    )
}

export default Layout;