import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      displayTop: 0,
      displayBot: 0,
      value: "Final Value",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (id, name) => {
    if (this.state.displayBot == 0 && name != "AC") {
      this.setState({
        displayTop: name,
        displayBot: name,
      });
    } else if (name == "AC") {
      this.setState({
        displayTop: 0,
        displayBot: 0,
        value: 0,
      });
    } else if (name == "." && this.state.displayBot.indexOf(name) != -1) {
      this.setState({
        displayBot: this.state.displayBot,
        displayTop: this.state.displayTop,
      });
    } else if (this.state.value == this.state.displayBot) {
      if (name == "+" || name == "*" || name == "/") {
        this.setState({
          displayTop: this.state.displayBot + name,
          value: 0,
        });
        this.setState({
          displayBot: name,
        });
      } else {
        this.setState({
          displayBot: name,
          displayTop: name,
          value: 0,
        });
      }
    } else if (
      this.state.displayBot == "+" ||
      this.state.displayBot == "-" ||
      this.state.displayBot == "*" ||
      this.state.displayBot == "/"
    ) {
      this.setState({
        displayBot: name,
      });
      //
      if (name == "+" || name == "-" || name == "/")
        if (this.state.displayTop.endsWith("-"))
          if (
            this.state.displayTop.charAt(this.state.displayTop.length - 2) ==
              "*" ||
            this.state.displayTop.charAt(this.state.displayTop.length - 2) ==
              "+" ||
            this.state.displayTop.charAt(this.state.displayTop.length - 2) ==
              "/"
          ) {
            var temp = this.state.displayTop;
            var input = temp.substring(0, temp.length - 2);
            this.setState({
              displayTop: input + name,
            });
          }
      //
      if (
        this.state.displayTop.endsWith("+") == true ||
        this.state.displayTop.endsWith("-") == true ||
        this.state.displayTop.endsWith("*") == true ||
        this.state.displayTop.endsWith("/") == true
      ) {
        if (name == "+" || name == "*" || name == "/") {
          this.setState((prevState) => ({
            displayTop: prevState.displayTop.replace(/.$/, name),
          }));
        } else if (name == "-" && this.state.displayTop.endsWith("-") == true) {
          this.setState((prevState) => ({
            displayTop: prevState.displayTop,
          }));
        } else if (name == "-") {
          this.setState({
            displayTop: this.state.displayTop + name,
          });
        } else {
          this.setState((prevState) => ({
            displayTop: prevState.displayTop + name,
          }));
        }
      }
    } else {
      this.setState({
        displayTop: this.state.displayTop + name,
      });
      switch (name) {
        case "+":
        case "-":
        case "*":
        case "/":
          this.setState({ displayBot: name });
          break;
        case "=":
          this.state.value = eval(this.state.displayTop);
          console.log(this.state.value);
          this.setState({ displayBot: this.state.value });
          this.setState({
            displayTop: this.state.displayTop + name + this.state.value,
          });
          break;
        default:
          this.setState({ displayBot: this.state.displayBot + name });
      }
    }
  };

  render() {
    return (
      <div id="container">
        <div id="displayTop">{this.state.displayTop}</div>
        <div id="display">{this.state.displayBot}</div>
        <Button onClick={this.handleClick} />
      </div>
    );
  }
}
export default App;
