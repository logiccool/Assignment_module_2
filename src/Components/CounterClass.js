import React,{Component} from "react";
import './Components.css';
class CounterClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({count: this.state.count + 1});
    }
    decrement = () => {
        this.setState({count: this.state.count - 1});
    }
    render(){
        return(
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button class="button" onClick={this.increment}>Increment</button>
                <button class= "button" onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}
export default CounterClass;