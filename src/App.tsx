import CardList from './CardList'
import SearchBox from './SearchBox'
import { robots } from './robots'
import './App.css'
import 'tachyons'

function App() {
  return (
    <div className="tc">
      <h1>Robofriends</h1>
      <SearchBox />
      <CardList robots={robots} />
    </div>
  );
}

export default App
