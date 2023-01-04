import "./App.scss"
import FilterRow from "./components/FilterRow/FilterRow"
import Header from "./components/Header/Header"
import OfferList from "./components/OfferList/OfferList"

function App() {
  return (
    <div className="App">
      <Header />
      <FilterRow />
      <OfferList />
    </div>
  )
}

export default App
