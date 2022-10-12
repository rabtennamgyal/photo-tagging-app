import main from '../assets/main.jpg'; 
import char from '../assets/pokemons/Charmander.gif';


function Body({displayDropMenu}) {
    return (
        <div className='content'>
            <div className='header'>
                <h1>
                    Find these Pokemons
                </h1>
            </div>

            <div className='body'>
                <img src={main} alt='image with many pokemons' onClick={displayDropMenu}/>
            </div>

            <div className='dropMenu' id='dropDownMenu'>
                <div className='dropMenuContainer'>
                    <img src={char} alt='img' />

                    <h1>
                        mario
                    </h1>
                </div>

                <div className='dropMenuContainer'>
                    <img src={char} alt='img' />

                    <h1>
                        Link
                    </h1>
                </div>

                <div className='dropMenuContainer'>
                    <img src={char} alt='img' />

                    <h1>
                        Kong
                    </h1>
                </div>
            </div>
        </div>
    )
};

export default Body;