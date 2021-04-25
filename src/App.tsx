import "./App.css";
import { Component } from "react";

interface IProps {}

interface IChar {
  id: string;
  name: string;
}

interface IState {
  characters: Array<IChar>;
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
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
        {this.state.characters.map((char: IChar) => {
          return <h1 key={char.id}> {char.name} </h1>;
        })}
      </div>
    );
  }
}

export default App;
