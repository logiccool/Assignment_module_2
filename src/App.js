import logo from './logo.svg';
import './App.css';
import CounterClass from './Components/CounterClass';
import CounterFunction from './Components/CounterFunction';
function App() {
  return (
    <div className="App">
    <h1>Counter Class Component</h1> 
    <CounterClass /> 
    <h1>Counter Functional Component</h1>
    <CounterFunction />
    </div>
  );
}

export default App;
