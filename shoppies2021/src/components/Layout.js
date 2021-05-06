import React from 'react';

const style = {
    containerLeft: {
        backgroundColor: '#73FF9B',
        display: 'grid',
    },
    containerRight: {
        display: 'grid',
        backgroundColor: '#59FFFC',
        paddingBottom: '1000px',
    }
}

const Layout = () => {
    return (
        <main className = "row">
            <div className = "col-6 containerLeft" style={style.containerLeft}>
                
            </div>
            <div className = "col-6 containerRight" style={style.containerRight}>
                
            </div>
        </main>
    )
}

export default Layout;