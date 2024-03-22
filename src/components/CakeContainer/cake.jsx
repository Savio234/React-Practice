import React from 'react'
import { connect } from 'react-redux'
import { BUYCAKE, RETURNCAKE } from '../../redux'
import './cake.css'

const Cake = (props) => {
  return (
    <div className='flex flex-column align-center container'>
        <h1>Number of Cakes - {props.numOfCakes}</h1>
        <div className='flex flex-center btns'>
            <button style={{cursor: 'pointer'}} onClick={props.returnCake}>Return cakes</button>
            <button style={{cursor: 'pointer'}} onClick={props.buyCake}>Buy cakes</button>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => { //has been modified with the useSelector hook
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => { //has been modified with the useDispatch hook
    return {
        buyCake: () => dispatch(BUYCAKE()),
        returnCake: () => dispatch(RETURNCAKE())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cake)