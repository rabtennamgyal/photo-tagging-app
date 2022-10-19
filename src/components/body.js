import main from '../assets/main.jpg'; 
import bulbasaur from '../assets/pokemons/001Bulbasaur.webp';
import croconaw from '../assets/pokemons/159Croconaw.png';
import slugma from '../assets/pokemons/218Slugma.png';



function Body({ displayDropMenu, checkImg, checkImg2, checkImg3, minute, second, millisecond }) {   
    const closePopUp = () => {
        const popup = document.getElementById('popup');
        const h1 = document.querySelector('.thetext')

        popup.style.display = 'none';
        popup.removeChild(h1);
    };

    const closeGameOver = () => {
        const gameOver = document.getElementById('gameOver');
        gameOver.style.display = 'none';
    } 

    return (
        <div className='content'>
            <div className='header'>
                <div className="timer">
                    <span id="minute">00</span>:<span id="second">00</span>:<span id="millisecond">000</span>
                </div>

                <h1>
                    Find these Pokemons:
                </h1>

                <div className='items'>
                    <img id='Bulbasaur' src={bulbasaur} alt='a pokemon' />
                    <img id='Croconaw' src={croconaw} alt='a pokemon' />
                    <img id='Slugma' src={slugma} alt='a pokemon' />
                </div>
            </div>

            <div className='body' id='box'>
                <img src={main} alt='image with many pokemons' onClick={displayDropMenu}/>
            </div>

            <div className='dropMenu' id='dropDownMenu'>
                <div className='dropMenuContainer'>
                    <p onClick={checkImg3}>
                        Slugma
                    </p>
                </div>

                <div className='dropMenuContainer'>
                    <p onClick={checkImg2}>
                        Croconaw
                    </p>
                </div>

                <div className='dropMenuContainer'>
                    <p onClick={checkImg}>
                        Bulbasuar
                    </p>
                </div>
            </div>

            <div className='popup' id='popup'>
                <p id='close' onClick={closePopUp}>
                    &#10005;
                </p>
            </div>

            <div className='gameOver' id='gameOver'>
                <div className='titleBox'>
                    <h1>
                        {`You finished in ${minute}:${second}:${millisecond}`}
                    </h1>
                </div>

                <div className='inputBox'>
                    <h1>
                        Sumbit your score:
                    </h1>

                    <form>
                        <label form='username'>Username:</label>
                        <input type='text' id='username'></input>
                    </form>

                    <div className='btns'>
                        <button id='cancel' onClick={closeGameOver}>
                            Cancel
                        </button>

                        <button id='submit'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Body;