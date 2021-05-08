import {React, Component} from 'react';
import logo from '../assets/Logo.gif';

const style = {
    logoStyle: {
        display: 'grid',
        justifyContent: 'center',
    },
}

class Logo extends Component { 
    render() { 
        return (   
                <img src={logo} alt={"Shoppie 2021 Logo"} id='logoStyle' style={style.logoStyle}/>
        )  
    }
}

export default Logo; 