import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'

const App = () => {
  return (
    <main className="bg-black mx-auto max-w-[1200px] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  )
}

export default App
