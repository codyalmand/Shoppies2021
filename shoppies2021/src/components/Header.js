import React from 'react';
import Logo from '../components/Logo';
import Search from '../components/Search';

const style = {
    row: {
        backgroundColor: '#010101',
        display: 'grid',
        justifyContent: 'center',
        fontFamily: 'Myriad',
        fontSize: '30px',
    }
}

const Header = () => {
    return (
        <main className = "row" style={style.row}>
                <Logo/>
            <div><Search/></div>
        </main>
    )
}

export default Header;