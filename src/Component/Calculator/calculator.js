import React from "react";
import "./calculator.css";

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: 0,
      inputvalue: 0,
    };
  }
  handleChange = (e) => {
    this.setState({
      inputvalue: e.target.name,
    });
  };

  handleClick = (e) => {
    const addition =
      parseInt(this.state.output) + parseInt(this.state.inputvalue);
    this.setState({
      output: addition,
    });
  };

  handleSub = (e) => {
    const subtraction =
      parseInt(this.state.output) - parseInt(this.state.inputvalue);
    this.setState({
      output: subtraction,
    });
  };

  handleDiv = (e) => {
    const div = parseInt(this.state.output) / parseInt(this.state.inputvalue);
    this.setState({
      output: div,
    });
  };

  handleMul = (e) => {
    const Mul = parseInt(this.state.output) * parseInt(this.state.inputvalue);
    this.setState({
      output: Mul,
    });
  };

  clear = (e) => {
    const clear = "";
    this.setState({
      output: clear,
    });
  };

  render() {
    return (
      <div className="box">
        <h1>Calculator</h1>
        <input
          value={this.state.inputvalue}
          onClick={this.handleChange}
        ></input>
        {/* <h5>Typed value:{this.state.inputvalue}</h5> */}
        <br></br>
        <div className="flexing_boxes">
          <button
            className="numbering_box"
            onClick={this.handleChange}
            name="1"
          >
            1
          </button>
          <button
            className="numbering_box"
            onClick={this.handleChange}
            name="2"
          >
            2
          </button>
          <button
            className="numbering_box"
            onClick={this.handleChange}
            name={3}
          >
            3
          </button>
          <button className="numbering_box1" onClick={this.handleClick}>
            +
          </button>
          <button
            className="numbering_box"
            onClick={this.handleChange}
            name={4}
          >
            4
          </button>
          <button
            className="numbering_box"
            onClick={this.handleChange}
            name={5}
          >
            5
          </button>
          <button
            className="numbering_box"
            onClick={this.handleChange}
            name={6}
          >
            6
          </button>
          <button className="numbering_box1" onClick={this.handleSub}>
            -
          </button>
          <button
            className="numbering_box"
            onClick={this.handleChange}
            name={7}
          >
            7
          </button>
          <button
            className="numbering_box"
            onClick={this.handleChange}
            name={8}
          >
            8
          </button>
          <button
            className="numbering_box"
            onClick={this.handleChange}
            name={9}
          >
            9
          </button>
          <button className="numbering_box1" onClick={this.handleMul}>
            *
          </button>
          <button className="numbering_box2" onClick={this.clear}>
            C
          </button>
          <button
            className="numbering_box"
            onClick={this.handleChange}
            value={0}
          >
            0
          </button>
          <button className="numbering_box">=</button>
          <button className="numbering_box1" onClick={this.handleDiv}>
            /
          </button>
        </div>
        <h4 className="lastheading">The Result is : {this.state.output} </h4>
      </div>
    );
  }
}
export default Calc;
