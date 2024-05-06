import meme from '/src/assets/Troll Face.png'

export const Nav = () => {
    return(
        <div className="nav">
            <div className="logo-container">
                <img src={meme}/>
                <h3>Meme Generator</h3>
            </div>
            <p>Project 3</p>
        </div>
    );
}