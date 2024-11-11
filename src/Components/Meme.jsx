import memesData from "../memesData.jsx"
import React from "react"

function Meme() {
    const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg");

    function getRandomImage() {
        const memesArray = memesData.data.memes;
        const memeUrl = memesData.data.memes[Math.floor(Math.random() * (memesArray.length + 1))].url;
        return setMemeImage(memeUrl);
    }

    return (
        <main>
            <div className="form">
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
            <img className="image-format" src={memeImage} />
        </main>
    )
}

export default Meme;