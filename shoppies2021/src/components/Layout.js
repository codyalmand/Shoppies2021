import React from 'react';
import Cards from './Cards'
import MoviesList from './MoviesList';
import NomTitle from './NomTitle';

const style = {
    containerLeft: {
        backgroundColor: '#59FFFC',
        display: 'grid',
        border: 'solid',
        borderRadius: '30px',
        padding: '20px',
        margin: '10px',
    },
    containerRight: {
        backgroundColor: '#BF87FF',
        display: 'grid',
        border: 'solid',
        borderRadius: '30px',
        padding: '20px',
        margin: '10px',
    },
    NomTitle: {

    }
}

const Layout = () => {
    return (
        <main className = "row">
                <div className = "col containerLeft" style={style.containerLeft}>
                    <Cards/>
                    <MoviesList/>
            </div>
                <div className = "col-6 containerRight" style={style.containerRight}>
                    <NomTitle/>
            </div>
        </main>
    )
}

export default Layout;