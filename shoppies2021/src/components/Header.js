import React from 'react';
import Logo from '../components/Logo';
import Searchbar from '../components/Searchbar';

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
                <Searchbar/>
        </main>
    )
}

export default Header;