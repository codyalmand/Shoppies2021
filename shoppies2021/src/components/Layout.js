import React from 'react';
import Cards from './Cards'

const style = {
    containerLeft: {
        backgroundColor: '#73FF9B',
        display: 'grid',
        border: 'solid',
        borderRadius: '30px',
    },
    containerRight: {
        display: 'grid',
        backgroundColor: '#59FFFC',
        paddingBottom: '1000px',
        border: 'solid',
        borderRadius: '30px',
    }
}

const Layout = () => {
    return (
        <main className = "row">
            <div className = "col-6 containerLeft" style={style.containerLeft}>
            <Cards/>
            </div>
            <div className = "col-6 containerRight" style={style.containerRight}>
                
            </div>
        </main>
    )
}

export default Layout;