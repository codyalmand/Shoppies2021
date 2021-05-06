import React from 'react';
import Logo from '../components/Logo';

const style = {
    row: {
        backgroundColor: '#010101',
        display: 'grid',
        justifyContent: 'center',
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