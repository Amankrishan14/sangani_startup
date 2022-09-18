
export default function Landing() {
    return (
        <div className="landing" style={{ minHeight: "100vh" }}>
            <div className="landing-grid" >

                <div class="landing-grid-item" >
                    <div style={{ fontSize: 100, fontFamily: "Courier New", fontWeight: "bold" }}>
                        Sangini
                    </div>
                    <div style={{ fontSize: 60, padding: 100, fontFamily: "Courier New" }}>
                        One destination for all your medical needs.
                    </div>
                    {/* <form action="">
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </form>
                    <p>
                        {title}
                    </p> */}

                </div>
            </div>
        </div>
    )
}
