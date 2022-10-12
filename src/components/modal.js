import charmander from '../assets/pokemons/Charmander.gif';


function Modal({startGame}) {
    return (
        <div className="modal">
            <h1>
                Find these Pokemons:
            </h1>

            <div className="card">
                <div className="imgs">
                    <img src={charmander} alt='A Charmander looking jolly' />
                    <img src={charmander} alt='A Charmander looking jolly' />
                    <img src={charmander} alt='A Charmander looking jolly' />
                </div>

                <button id='start' onClick={startGame}>
                    Start
                </button>
            </div>
        </div>
    )
};

export default Modal;