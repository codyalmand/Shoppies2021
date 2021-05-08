import React from "react";

const style = {
    button: {
        padding: '8px',
        paddingLeft: '40px',
        paddingRight: '40px',
        borderRadius: '10px',
        color: '#fff',
        backgroundColor: '#010101',
    }
}


function DeleteButton (props) {
    return (
        <div className="row">
            <div className="col-sm-12"  id="vote-button">
                <br/>
                <button style={style.button} disabled={props.disabled} 
                    onClick={props.onClick}>Remove Movie{props.children}
                </button>
                <br></br>
                <br></br>
                <hr></hr>
            </div>
        </div>
    )
}

export default DeleteButton;