import React, { Component } from 'react';
import './style.css';

class DisplayCounter extends Component{

constructor(props){
    super(props);
    this.state ={count : 0} 
}

onIncreamentClick = (e) => {
this.setState({
count : this.state.count+1
});

}
onDecreamentClick = (e) =>{
    this.setState({
    count : this.state.count-1
    });
    
    }
onResetClick = (e) =>{
        this.setState({
        count : 0
        });
        
  }
render(){


    return(
     <div>
         <div>
       <input readOnly className="display-counter" value={this.state.count} />
       </div>
       <div className="button-margin">
            <input className="button green " title="Increament" type="button" value="+" onClick={this.onIncreamentClick} />
            <input className="button orange" title="Reset" type="button" value="□" onClick={this.onResetClick} />
            <input className="button red" title="Decreament" type="button" value="-" onClick={this.onDecreamentClick} />
       </div>
     </div>
     
    );
}

}
export default DisplayCounter;