import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";
import "tachyons";

function App(props: any) {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    console.log("halo")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(async (response) => {
        return await response.json();
      })
      .then((users): any => {
        setRobots(users);
      });
  }, []);

  const onSearchChange = (event: any) => {
    setSearchfield(event.target.value);
    console.log("halo")
  };

  const filteredRobots = robots.filter((robot: { username: string }) => {
    return robot.username?.toLowerCase().includes(searchfield.toLowerCase());
  });
  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="white f1">Robofriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App;
