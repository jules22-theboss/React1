import Header from './components/Header'
import Animal from './components/Animal'
import Navbar from './components/Navbar'
import Counter from './components/Counter'
import PokemonCard from './components/PokemonCard'
import Team from './components/Team'
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <Animal animal='cow' sound="moo"/>
      <Animal animal='dog' sound="woof"/>
      <Counter />
      <Team>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
      </Team>

    </>
  )
}

export default App
