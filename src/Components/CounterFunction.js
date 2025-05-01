import React from "react";
import './Components.css';



function CounterFunction() {
    const [count, setCount] = React.useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    return(
        <div>
            <h1>Counter: {count}</h1>
            <button class="button" onClick={increment}>Increment</button>
            <button class="button" onClick={decrement}>Decrement</button>
        </div>
    )
}
export default CounterFunction;