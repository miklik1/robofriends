import React, { Component } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import { robots } from './robots'
import './App.css'
import 'tachyons'

interface ICard {
  id: number,
  name?: string,
  username: string,
  email: string
}

interface IState {
  robots: ICard[],
  searchfield: string
}

class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange(event: any) {
    console.log(event.target.value)
  }

  render() {
    return (
      <div className="tc">
        <h1>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App
