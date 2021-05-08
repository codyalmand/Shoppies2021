import React from 'react';
import Logo from '../components/Logo';

const style = {
    row: {
        display: 'grid',
        justifyContent: 'center',
        backgroundColor: '#010101',
    }
}

const Header = () => {
    return (
        <main className = "row" style={style.row}>
                <Logo/>
        </main>
    )
}

export default Header;