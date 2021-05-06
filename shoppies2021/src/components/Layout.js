import React from 'react';
import Cards from './Cards'
import MoviesList from './MoviesList';

const style = {
    containerLeft: {
        backgroundColor: '#BF87FF',
        display: 'grid',
        border: 'solid',
        borderRadius: '30px',
    },
    containerRight: {
        display: 'grid',
        backgroundColor: '#59FFFC',
        paddingBottom: '500px',
        border: 'solid',
        borderRadius: '30px',
    }
}

const Layout = () => {
    return (
        <main className = "row">
            <div className = "col-6 containerLeft" style={style.containerLeft}>
            <Cards/>
            <MoviesList/>
            </div>
            <div className = "col-6 containerRight" style={style.containerRight}>
                
            </div>
        </main>
    )
}

export default Layout;