import {React, Component} from 'react';
import style from './NomTitle.css'
           
class NomTitle extends Component { 
    render() { 
        return (   
            <div className="NomText" style={style.NomStyle}>Nominations</div>
        )  
    }
}

export default NomTitle; 