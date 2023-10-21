import React from 'react'
import IMG1 from '../../assets/images/c.jpg'
import memesData from '../../mock/memesData'
import './Memegenerator.css'

const Memegenerator = () => {
    function getRandomUrl() {
        const LEN = memesData.length
        const random = Math.floor(Math.random() * LEN)
        console.log(random);
        const randomID = memesData[random].id;
        console.log(randomID);
    }

    let arrays = ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4']
    // eslint-disable-next-line
    // const add = arrays.push(`Thing ${arrays.length + 1}`)
    console.log(arrays);
    const elem = arrays.map(arr => <p>{arr}</p>)

    function addElement() {
        const add =  arrays.push(`Thing ${arrays.length + 1}`)
        // arrays.push(add)
        console.log(arrays);
    }


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
                 {elem}
                </div>

                <button onClick={addElement}>
                    Add Element
                </button>
            {/* </form> */}
        </div>
    </div>
  )
}

export default Memegenerator