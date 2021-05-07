import React from 'react';
import Cards from './Cards'
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
        <main className = "row" style={style.row}>
            <div className = "col containerLeft" style={style.containerLeft}>
                <Cards/>
                <MoviesList/>
            </div>
            <div className = "col containerRight" style={style.containerRight}>
                <NomTitle/>
                <NomList/>
            </div>
        </main>
    )
}

export default Layout;