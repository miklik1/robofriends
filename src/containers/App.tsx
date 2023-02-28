import React from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css'
import 'tachyons'

interface IState {
  robots: any
  searchfield: string
}

class App extends React.Component<Record<string, unknown>, IState> {
  constructor (props: any) {
    super(props)
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount (): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(async (response) => {
        return await response.json()
      })
      .then((users): any => {
        this.setState({ robots: users })
      })
  }

  onSearchChange = (event: any) => {
    this.setState({ searchfield: event.target.value })
  }

  render () {
    const { robots, searchfield } = this.state
    const filteredRobots = robots.filter(
      (robot: { username: string }) => {
        return robot.username
          ?.toLowerCase()
          .includes(searchfield.toLowerCase())
      }
    )
    return !robots.length
      ? <h1>Loading</h1>
      : (
        <div className="tc">
          <h1 className="white f1">Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
        )
  }
}

export default App
