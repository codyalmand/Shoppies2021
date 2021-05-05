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
            <main>     
                <img src={logo} alt={"logo"} id='logoStyle' style={style.logoStyle}/>
            </main>
        )  
    }
}

export default Logo;