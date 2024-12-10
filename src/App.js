import "./App.css";
import Counter from "./components/Counter";
// import Home from "./components/Home";
import Root from "./components/Root";

function App() {
  const person = {name:"Jerry", age:23, city:"Mumbai"}
  // const fruits = ["Apple", "Kiwi", "Banana", "Orange"]
  return (
    <div className="App">
      <header className="App-header">
        {/* <Home info={person} fruits={fruits}/> */}
        {/* <Root person={person}/> */}
        <Counter/>
      </header>
    </div>
  );
}

export default App;
