import React from "react";
import "./Button.css";

const buttonData = [
  { id: "clear", name: "AC" },
  { id: "divide", name: "/" },
  { id: "multiply", name: "*" },
  { id: "seven", name: "7" },
  { id: "eight", name: "8" },
  { id: "nine", name: "9" },
  { id: "subtract", name: "-" },
  { id: "four", name: "4" },
  { id: "five", name: "5" },
  { id: "six", name: "6" },
  { id: "add", name: "+" },
  { id: "one", name: "1" },
  { id: "two", name: "2" },
  { id: "three", name: "3" },
  { id: "equals", name: "=" },
  { id: "zero", name: "0" },
  { id: "decimal", name: "." },
];

class Button extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { onClick } = this.props;
    const info = buttonData.map((info) => (
      <button id={info.id} onClick={() => onClick(info.id, info.name)}>
        {info.name}
      </button>
    ));

    return info;
  }
}

export default Button;
