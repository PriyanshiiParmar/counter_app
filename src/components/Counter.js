import React from "react";
class Counter extends React.Component
{
    constructor(){
        super();
        this.state = {
            count : 0,
        }
    }
    increment = () =>{
        this.setState({
            count : this.state.count + 1
        });
    }
    decrement = () =>{
        this.setState({
            count : this.state.count - 1
        })
    }
    reset = () =>{
        this.setState({
            count: this.state.count = 0
        })
    }
    render(){
        return(
            <div className="counter">
                <h1>Counter Application</h1>
                <h1>{this.state.count}</h1>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.reset}>reset</button>
                <button onClick={this.increment}>increment</button>
            </div>
        )
    }
}
export default Counter;