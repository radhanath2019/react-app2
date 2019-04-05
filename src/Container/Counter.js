import React,{Component} from 'react';
import {connect} from 'react-redux';
import {increment,decrement} from '../Actions/Counter.actions';

let Counter=({stateObj,increment,decrement})=>{
     return <div>
         <button>Increment</button>
         <button>Decrement</button>
         <label>Count :{stateObj.counter}</label>
     </div>
}
const mapStateToProps=(state)=>({
    stateObj:state
});
const mapDispatchToProps=(dispatch)=>({
    increment:()=>{dispatch(increment())},
    decrement:()=>{dispatch(decrement())}
})
Counter=connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter);

export default Counter;