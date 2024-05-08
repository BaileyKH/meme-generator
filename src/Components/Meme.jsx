import { useState } from 'react'

import memes from '/src/MemeData.js'

export const Meme = () => {

    const [memeImage, setMemeImage] = useState("")

    function getMemeImage() {
        const memeArray = memes.data.memes
        const randomNumber = Math.floor(Math.random()*memeArray.length)

        setMemeImage(memeArray[randomNumber].url)
    }

    return(
        <div className="form-container">
            <div className="form">
                <div>
                    <label htmlFor="top-text">Top Text</label>
                    <input id="top-text" className="form-input" type="text" placeholder="Shut up"/>
                </div>
                <div>
                    <label htmlFor="bottom-text">Bottom Text</label>
                    <input id="bottom-text" className="form-input" type="text" placeholder="And take my money"/>
                </div>
                <button className="form-btn" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <img src={memeImage} className="meme-img"/>
        </div>
    );
}