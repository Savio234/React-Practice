import React from 'react'
import IMG1 from '../../assets/images/c.jpg'
import CardData from '../../mock/CardData'
import './Memegenerator.css'

const Memegenerator = () => {
    function getRandomUrl() {
        let random;
        random = Math.floor(Math.random() * CardData.length)
        console.log(random);
    }
    // console.log(getRandomUrl());
  return (
    <div className='meme-container'>
        <div className="meme-header flex flex-center flex-between">
            <div className="flex flex-center">
                <div className="image">
                    <img src={IMG1} alt="" />
                </div>
                <h3 className="meme-header-h3">Meme Generator</h3>
            </div>

            <div className="">
                <h3>React Course</h3>
            </div>
        </div>

        <div className="meme-body">
            {/* <form action="" className='form'> */}
                <div className="input-container flex flex-center flex-between">
                    <input className='input-field' type="text" placeholder='Top text...' name="" id="" />
                    <input className='input-field' type="text" placeholder='Bottom text...' name="" id="" />
                </div>
                <button onClick={getRandomUrl} className="meme-btn flex align-center">
                    <h3>Get a new meme image</h3>
                </button>

                <div className="randomImage">
                    
                </div>
            {/* </form> */}
        </div>
    </div>
  )
}

export default Memegenerator