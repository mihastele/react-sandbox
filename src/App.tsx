import './App.css'
import React, { Component, ReactNode } from 'react'
import { CardList } from './components/card-list/card-list.component'
import { IChar, IProps, IState } from './definitions/main-defs'
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props)
		this.state = {
			characters: [
				{
					id: '1',
					name: 'Magarac',
					email: '',
				},
				{
					id: '2',
					name: 'Đukela',
					email: '',
				},
				{
					id: '3',
					name: 'Doge',
					email: '',
				},
			],
			searchField: '',
		}
	}

	componentDidMount(): void {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ characters: users }))
	}

	render(): ReactNode {
		const { characters, searchField } = this.state
		const filteredCharacters = this.state.characters.filter((f: IChar) => {
			return f.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return (
			<div className="App">
				<SearchBox
					placeholder="Search for Characters"
					handleChange={(e) => this.setState({searchField: e.target.value})}
				/>
				<CardList characters={filteredCharacters}></CardList>
			</div>
		)
	}
}

export default App
