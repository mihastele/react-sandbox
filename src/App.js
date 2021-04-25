import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [
        {
          id: "1",
          name: "Magarac",
        },
        {
          id: "2",
          name: "Đukela",
        },
        {
          id: "3",
          name: "Doge",
        },
      ],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ characters: users }));
  }

  render() {
    return (
      <div className="App">
        {this.state.characters.map((char) => {
          return <h1 key={char.key}> {char.name} </h1>;
        })}
      </div>
    );
  }
}

export default App;
