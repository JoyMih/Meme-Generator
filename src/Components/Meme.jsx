function Meme() {
    return (
        <main>
            <form className="form">
                {/* <div className="text-areas"> */}
                <label className="form-label"> Top Text
                    <input type="text" placeholder="Top text" className="form-input" />
                </label>
                <label className="form-label"> Bottom Text
                    <input type="text" placeholder="Bottom Text" className="form-input" />
                </label>
                {/* </div> */}
                <button className="form-btn">
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}

export default Meme;