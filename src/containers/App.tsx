import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css'

import { setSearchField, requestRobots } from '../actions'

const mapStateToProps: any = (state: any) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps: any = (dispatch: any) => {
  return {
    onSearchChange: (event: any) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

function App (props: any): React.ReactElement {

  useEffect(() => {
    props.onRequestRobots()
  }, [])

  const { searchField, onSearchChange, robots, isPending } = props

  const filteredRobots = robots.filter((robot: { username: string }) => {
    return robot.username?.toLowerCase().includes(searchField.toLowerCase())
  })

  return isPending
    ? (
    <h1>Loading</h1>
      )
    : (
    <div className="tc">
      <h1 className="white f1">Robofriends</h1>
      <SearchBox searchChange={ onSearchChange } />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
      )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
