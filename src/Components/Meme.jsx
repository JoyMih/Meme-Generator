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
        console.log(memeAltText);

        setMemeImage((prevMemeImage) => ({ // Surrounding the return with parentheses in order to use implicit return
            ...prevMemeImage, // Pulling all of the properties of the previous meme
            randomImage: memeUrl, // Altering the random image property
            altText: memeAltText // Alternate text
        }))
    }

    function handleChange( event ) { // Passing in the event object
        const { name, value } = event.target // unpacking the name and value property from the event object
        setMemeImage((prevMemeImage) => ({
            ...prevMemeImage,
            [ name ]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <label className="form-label"> Top Text
                    <input
                        type="text"
                        placeholder="Shut up"
                        className="form-input"
                        name="topText" // Name property allows for us to watch for changes
                        value={ memeImage.topText } // Value property allows for controlling of this component
                        onChange={ handleChange }
                    />
                </label>
                <label className="form-label"> Bottom Text
                    <input
                        type="text"
                        placeholder="and take my money"
                        className="form-input"
                        name="bottomText" // Name property allows for us to watch for changes
                        value={ memeImage.bottomText } //  Value property allows for controlling of this component
                        onChange={ handleChange }
                    />
                </label>
                <button
                    onClick={getRandomImage}
                    className="form-btn">
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img className="image-format" src={memeImage.randomImage} alt="" />
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme;