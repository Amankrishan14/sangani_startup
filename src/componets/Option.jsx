import React from "react";
export default function Option() {

    return (
        <>
        <div className="option" style={{fontSize:20,backgroundColor:"white"}}>
            <div style={{textAlign:"center",fontSize:100,color:"white"}}>
                Option
            </div>
        <div className="qgrid" >
            <div class="grid-item">
                <a href="/medicon">Medical Consentencty</a>
                <div>

                </div>
            </div>
            <div class="grid-item">
                <a href="/legalcon">Legal Consentencty</a>
            </div>
            <div class="grid-item">
                <a href="/basiccon">Basic Consentencty</a>
            </div>
        </div>
        </div>
        </>
    )
}
