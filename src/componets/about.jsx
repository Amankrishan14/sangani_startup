import React from "react";
import { useParams } from "react-router-dom";

export default function About(){
    const {id}= useParams();
    return(
        <div className="about">
            <h3>about--{id}</h3>
            <h3>about--{id}</h3>
            <h3>about--{id}</h3>
            <h3>about--{id}</h3>
            <h3>about--{id}</h3>
            <h3>about--{id}</h3>
            <h3>about--{id}</h3>
            <h1>
                startup 1
            </h1>
        </div>
    )
}