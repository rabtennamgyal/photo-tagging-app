import main from '../assets/main.jpg'; 


function Body({displayDropMenu, checkImg}) {
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
                    <p>
                        Charmander
                    </p>
                </div>

                <div className='dropMenuContainer'>
                    <p>
                        Squirtle
                    </p>
                </div>

                <div className='dropMenuContainer'>
                    <p onClick={checkImg}>
                        Bulbasuar
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Body;