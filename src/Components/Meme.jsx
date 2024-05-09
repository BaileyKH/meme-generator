import { useState } from 'react'

import memes from '/src/MemeData.js'

export const Meme = () => {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = useState(memes)

    function getMemeImage() {
        const memeArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random()*memeArray.length)
        const url = memeArray[randomNumber].url

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event){
        const {name, value,} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(
        <div className="form-container">
            <div className="form">
                <div>
                    <label htmlFor="top-text">Top Text</label>
                    <input 
                        id="top-text" 
                        className="form-input" 
                        type="text" 
                        placeholder="Shut up"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="bottom-text">Bottom Text</label>
                    <input 
                        id="bottom-text" 
                        className="form-input" 
                        type="text" 
                        placeholder="And take my money"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange }
                    />
                </div>
                <button className="form-btn" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-img"/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    );
}