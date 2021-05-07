import React from "react";

function NomList(props) {
    return (
        <div className="col-sm-12 col-md-6">
            {props.children}
        </div>
    )
}

export default NomList;