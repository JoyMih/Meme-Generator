function Meme() {
    return (
        <main>
            <form className="form">
                {/* <div className="text-areas"> */}
                    <input type="text" placeholder="Top text" className="form-input" />
                    <input type="text" placeholder="Bottom Text" className="form-input" />
                {/* </div> */}
                <button className="form-btn">
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}

export default Meme;