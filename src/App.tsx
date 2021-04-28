import './App.css'
import React, { ChangeEventHandler, Component, ReactNode } from 'react'
import { CardList } from './components/card-list/card-list.component'
import { IChar, IProps, IState } from './definitions/main-defs'
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props)
		this.state = {
			characters: [],
			searchField: '',
		}

		this.handleChangeNonArrow = this.handleChangeNonArrow.bind(this)
	}

	componentDidMount(): void {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ characters: users }))
	}

	handleChange = (e: any): void => {
		this.setState({searchField: e.target.value})
	}

	handleChangeNonArrow(e: any): void {
		this.setState({searchField: e.target.value})
	}

	render(): ReactNode {
		const { characters, searchField } = this.state
		const filteredCharacters = characters.filter((f: IChar) => {
			return f.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return (
			<div className="App">
				<SearchBox
					placeholder="Search for Characters"
					handleChange={this.handleChange}
				/>
				<CardList characters={filteredCharacters}></CardList>
			</div>
		)
	}
}

export default App
