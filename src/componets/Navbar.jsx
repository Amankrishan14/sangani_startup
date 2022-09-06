import React from "react";
export default function nav() {
    return (
        <div>
            <ul className="navname">
                <li>
                    Sup1
                </li>

                <li className="dropdown">
                    <button className="dropbtn">Account</button>
                    <div className="dropdown-content">
                        <a href="/">LogIn</a>
                        <a href="/">SignUp</a>
                    </div>
                </li>
            </ul>
        </div>
    )
}