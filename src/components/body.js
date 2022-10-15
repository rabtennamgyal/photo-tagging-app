import main from '../assets/main.jpg'; 


function Body({displayDropMenu, checkImg, checkImg2, checkImg3}) {
    return (
        <div className='content'>
            <div className='header'>
                <h1>
                    Find these Pokemons
                </h1>
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
        </div>
    )
};

export default Body;