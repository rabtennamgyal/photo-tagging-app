import main from '../assets/main.jpg'; 
import bulbasaur from '../assets/pokemons/001Bulbasaur.webp';
import croconaw from '../assets/pokemons/159Croconaw.png';
import slugma from '../assets/pokemons/218Slugma.png';



function Body({ displayDropMenu, checkImg, checkImg2, checkImg3, time, setTime, setCount, submitData }) {   
    const closePopUp = () => {
        const popup = document.getElementById('popup');
        const h1 = document.querySelector('.thetext')

        popup.style.display = 'none';
        popup.removeChild(h1);
    };

    const closeGameOver = () => {
        const gameOver = document.getElementById('gameOver');
        gameOver.style.display = 'none';

        setTimeout(() => {
            setTime(0);
            setCount(0);
            closePopUp();
        }, 500);
    };

    return (
        <div className='content'>
            <div className='header'>
                <div className="timer">
                    <span id='min'>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}</span>:
                    <span id='sec'>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>:
                    <span id='mill'>{('0' + ((time / 10) % 100)).slice(-2)}</span>
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
                        You finished in {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
                        {('0' + Math.floor((time / 1000) % 60)).slice(-2)}:
                        {('0' + ((time / 10) % 100)).slice(-2)}
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

                        <button id='submit' onClick={submitData}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Body;