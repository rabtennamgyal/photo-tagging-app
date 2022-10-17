import { useEffect, useState } from 'react';
import main from '../assets/main.jpg'; 
import bulbasaur from '../assets/pokemons/001Bulbasaur.webp';
import croconaw from '../assets/pokemons/159Croconaw.png';
import slugma from '../assets/pokemons/218Slugma.png';



function Body({ displayDropMenu, checkImg, checkImg2, checkImg3 }) { 
    return (
        <div className='content'>
            <div className='header'>
                <h1>
                    Find these Pokemons:
                </h1>

                <div className='items'>
                    <img id='bulb' src={bulbasaur} alt='a pokemon' />
                    <img id='croc' src={croconaw} alt='a pokemon' />
                    <img id='slug' src={slugma} alt='a pokemon' />
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
        </div>
    )
};

export default Body;