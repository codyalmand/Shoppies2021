import React from "react";

function Banner(props) {
    return (
        <div id="banner" style={{
            padding: "5px",
            }}>
            <h3 id="bannerText"></h3>
            {props.children}
        </div>
    )
}

export default Banner;