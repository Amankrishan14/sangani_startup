import React from "react";
export default function nav() {
    return (
        <>
        <div className="nav-grid" style={{justifyContent:"center",gridTemplateColumns:"auto"}}>
            <div className="logo" style={{minHeight:"fit-content"}}>fn</div>
        </div>
        <div className="nav-grid">
            <div className="navg-component">hello</div>
            <div className="navg-component">hello</div>
            <div className="navg-component">hello</div>
            <div className="navg-component">hello</div>
        </div>
        </>
    )
}