// import React, { useState } from "react";
import React from "react";
export default function Contant() {
    // const { title, setTitle } = useState('');
    return (
        <div className="contant" style={{ minHeight: 750 }}>
            <div style={{ fontSize: 100, fontFamily: "Courier New", fontWeight: "bold", textAlign:"center",color:"white",padding:10 }}>
                Contant
            </div>
            {/* <div className="lgrid"> */}
                <div class="grid-item-l" style={{}}>
                        <div className="qgrid" style={{padding:50,gridTemplateColumns:"auto"}}>
                            <div className="grid-item">
                                medical gyaan
                            </div>
                            <div className="grid-item">
                                legal gyaan
                            </div>
                            <div className="grid-item">
                                basic gyaan
                            </div>


                        </div>
                </div>
            </div>
        // </div>
    )
}
