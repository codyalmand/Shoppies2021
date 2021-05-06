import React from 'react';
import Cards from './Cards'
import MoviesList from './MoviesList';

const style = {
    containerLeft: {
        backgroundColor: '#59FFFC',
        display: 'grid',
        border: 'solid',
        borderRadius: '30px',
        padding: '20px',
        margin: '20px',
    },
    // containerRight: {
    //     display: 'grid',
    //     backgroundColor: '#BF87FF',
    //     paddingBottom: '500px',
    //     border: 'solid',
    //     borderRadius: '30px',
    // }
}

const Layout = () => {
    return (
        <main className = "row">
            <div className = "col containerLeft" style={style.containerLeft}>
            <Cards/>
            <MoviesList/>
            </div>
            {/* <div className = "col-6 containerRight" style={style.containerRight}>
                
            </div> */}
        </main>
    )
}

export default Layout;