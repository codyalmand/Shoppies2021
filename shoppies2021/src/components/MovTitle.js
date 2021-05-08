import {React, Component} from 'react';
import style from './MovTitle.css'
           
class NomTitle extends Component { 
    render() { 
        return (   
            <div className="MovText" style={style.MovStyle}>
                Select Movies
                <hr></hr>
            </div>
        )  
    }
}

export default NomTitle; 