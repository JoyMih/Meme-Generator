// import memesData from "../secrets/memesData.jsx"
import React from "react"

/* Meme component */
function Meme() {
    const [memeImage, setMemeImage] = React.useState({ // First State Variable to be instantiated
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        altText: "One Does Not Simply"
    });
    const [allMemeImages, setAllMemeImages] = React.useState([]); // Second State Variable

    /* Fetch data from API: Batch retrieve the array of all memes upon first render using useEffect */
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes") // API endpoint we request data from
        .then((response) => response.json()) // .json method on the response
        .then((data) => setAllMemeImages(data.data.memes)) // Setting the received data/saving it to the allMemeImages state
    }, []); // Dependency array empty, as we only want a single fetch request upon first render
    
    /* Checking the data we retrieved from the fetch request*/
    React.useEffect(() => {
        console.log(allMemeImages); // Log only when `allMemeImages` changes
    }, [allMemeImages]);

    /* Function to Get Meme */
    function getRandomImage() {
        // old line of code that utilized imported static data--> const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * (allMemeImages.length));
        const memeUrl = allMemeImages[randomNumber].url;
        const memeAltText = allMemeImages[randomNumber].name;

        setMemeImage((prevMemeImage) => ({ // Surrounding the return with parentheses in order to use implicit return
            ...prevMemeImage, // Pulling all of the properties of the previous meme
            randomImage: memeUrl, // Altering the random image property
            altText: memeAltText // Alternate text for each image
        }))
    }

    /* Event handler for setting new image upon a change occurring with an HTML element */
    function handleChange( event ) { // Passing in the event object
        const { name, value } = event.target // unpacking the name and value property from the event object
        setMemeImage((prevMemeImage) => ({
            ...prevMemeImage,
            [ name ]: value // targeting and updating the passed in property and value
        }))
    }

    return (
        <main>
            <div className="form">
                <label className="form-label"> Top Text
                    <input
                        type="text"
                        placeholder="Top Text"
                        className="form-input"
                        name="topText" // Name property allows for us to watch for changes
                        value={ memeImage.topText } // Value property allows for controlling of this component
                        onChange={ handleChange }
                    />
                </label>
                <label className="form-label"> Bottom Text
                    <input
                        type="text"
                        placeholder="Bottom Text"
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
                <img className="image-format" src={memeImage.randomImage} alt={memeImage.altText} />
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme;