import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Model from './components/Model'

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Model />
    </main>
  )
}

export default App
