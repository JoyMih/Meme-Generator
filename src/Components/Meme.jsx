import memesData from "../memesData.jsx"
import React from "react"

function Meme() {
    const [memeImage, setMemeImage] = React.useState({ // First State Variable
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        altText: "One Does Not Simply"
    });
    const [allMemeImages, setAllMemeImages] = React.useState(memesData); // Second State Variable

    function getRandomImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * (memesArray.length + 1));
        const memeUrl = memesArray[randomNumber].url;
        const memeAltText = memesArray[randomNumber].name;

        setMemeImage((prevMemeImage) => ({ // Surrounding the return with parentheses in order to use implicit return
            ...prevMemeImage, // Pulling all of the properties of the previous meme
            randomImage: memeUrl, // Altering the random image property
            altText: memeAltText
        }))
        // return setMemeImage(memeUrl);
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
            <img className="image-format" src={memeImage.randomImage} alt="" />
        </main>
    )
}

export default Meme;