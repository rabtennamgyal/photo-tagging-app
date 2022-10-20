import bulbasaur from '../assets/pokemons/001Bulbasaur.webp';
import croconaw from '../assets/pokemons/159Croconaw.png';
import slugma from '../assets/pokemons/218Slugma.png';


function Modal({startGame}) {
    return (
        <div className="modal">
            <h1>
                Find these Pokemons
            </h1>

            <div className="card">
                <div className="imgs">
                    <img src={bulbasaur} alt='A Pokemon' />
                    <img src={croconaw} alt='A Pokemon' />
                    <img src={slugma} alt='A Pokemon' />
                </div>

                <button id='start' onClick={startGame}>
                    Start
                </button>
            </div>
        </div>
    )
};

export default Modal;