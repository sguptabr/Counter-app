import React from "react";
import {connect} from 'react-redux';


class App extends React.Component{
  increment = () => {
    return this.props.incre
  }
  

  decrement = () => {
    return this.props.decre
  }

//   incremntwith = () =>{

//   }

  disableButton = () => {
    return this.props.counter === 0 ? true : false; 
  }

  render(){
    return(
      <>
        <p>Counter : {this.props.counter}</p>
        <button onClick={this.increment()}>Add</button>
        <button onClick={this.decrement()} disabled={this.disableButton()}>Sub</button>
        {/* <button onClick={this.incremntwith()}>Addition</button> */}
      </>
    )
  }
}

const mapStatetoProps = (state) => {
  return{
    counter : state.counter
  }
}

const mapDispacthtoProps = (dispatch) => {
  return{
  incre : () => dispatch({ type : 'ADD'}),
  decre : () => dispatch({ type : 'SUB'}),
  //increwith : () => (num) => dispatch({type:'ADDWITH', num: 5})
  }
}


export default connect(mapStatetoProps, mapDispacthtoProps)(App);
