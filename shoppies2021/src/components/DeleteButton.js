import React from "react";

const style = {
    button: {
        padding: '8px',
        paddingLeft: '40px',
        paddingRight: '40px',
        borderColor: '#010101',
        borderRadius: '10px',
        color: '#010101',
        backgroundColor: '#fff',
    }
}


function DeleteButton (props) {
    return (
        <div className="row">
            <div className="col-sm-12"  id="vote-button">
                <br/>
                <button style={style.button} disabled={props.disabled} 
                    onClick={props.onClick}>
                        {props.children}
                </button>
                <br></br>
                <br></br>
                <hr></hr>
            </div>
        </div>
    )
}

export default DeleteButton;