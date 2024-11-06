import memesData from "./src/memesData.jsx"
function Meme() {
    function getRandomImage() {
        const memesArray = memesData.data.memes;
        console.log(memesArray);
        const memeUrl = memesData.data.memes[Math.floor(Math.random() * (memesArray.length + 1))].url;
        console.log(memeUrl);
        return memeUrl;
    }

    return (
        <main>
            <div className="form">
                {getRandomImage}
                <label className="form-label"> Top Text
                    <input type="text" placeholder="Shut up" className="form-input" />
                </label>
                <label className="form-label"> Bottom Text
                    <input type="text" placeholder="and take my money" className="form-input" />
                </label>
                <button onClick={getRandomImage} className="form-btn">
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}

export default Meme;