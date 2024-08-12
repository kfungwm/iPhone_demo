import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'

const App = () => {
  return (
    <main className="bg-black mx-auto max-w-[1200px] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  )
}

export default App
