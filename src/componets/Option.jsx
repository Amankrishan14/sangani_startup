import React from "react";
export default function Option() {

    return (
        <>
            <div className="option" style={{ fontSize: 20 }}>
                <div style={{ textAlign: "center", fontSize: 100, color: "black",marginBottom:"10rem" }}>
                    Option
                </div>
                <div className="option-grid" >
                    {/* medical */}
                    <div className="option-grid-content">
                    medical photo
                    </div>
                    <div className="option-grid-content">
                    medical
                    <br />
                    xyz_xyzxyz_xyzxyz_xyzxyz_xyzxyz_xyz
                    </div>
                    {/* sexual */}
                    <div className="option-grid-content">
                    sexual
                    </div>
                    <div className="option-grid-content">
                    sexual photo
                    </div>
                    {/* physical */}
                    <div className="option-grid-content">
                    physical photo
                    </div>
                    <div className="option-grid-content">
                    physical
                    </div>
                </div>
            </div>
        </>
    )
}
