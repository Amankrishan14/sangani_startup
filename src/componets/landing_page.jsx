import React, { useState } from "react";
export default function Landing(){
    const {title,setTitle}= useState('');
    return(
        <div className="landing" style={{minHeight:750}}>
            <div className="lgrid">
            <div class="grid-item-l" >
                <div style={{fontSize:100, fontFamily:"Courier New",fontWeight:"bold"}}>
                StartUp
                </div>
                <div style={{fontSize:60, padding:100, fontFamily:"Courier New"}}>
                    A consultancy firm
                </div>
                <form action="">
                    <input
                    type="text" 
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    />
                </form>
                <p>
                {title}
                </p>

            </div>
            </div>
        </div>
    )
}
