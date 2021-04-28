import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { IProps, IState } from "./definitions/main-defs";

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      characters: [
        {
          id: "1",
          name: "Magarac",
          email: "",
        },
        {
          id: "2",
          name: "Đukela",
          email: "",
        },
        {
          id: "3",
          name: "Doge",
          email: "",
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
        <CardList characters={this.state.characters}></CardList>
      </div>
    );
  }
}

export default App;
