import React from 'react';

const style = {
    containerLeft: {
        backgroundColor: 'green',
        display: 'grid',
    },
    containerRight: {
        display: 'grid',
        backgroundColor: 'blue',
    }
}

const Layout = () => {
    return (
        <main className = "row">
            <div className = "col-6 containerLeft" style={style.containerLeft}>
                hello
            </div>
            <div className = "col-6 containerRight" style={style.containerRight}>
                hello
            </div>
        </main>
    )
}

export default Layout;