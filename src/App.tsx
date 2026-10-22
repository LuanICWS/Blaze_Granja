import Dashboard from './components/Dashboard'
import Expansion from './components/Expansion'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Steps from './components/Steps'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Dashboard />
        <Steps />
        <Expansion />
        <Features />
      </main>
      <Footer />
    </>
  )
}

export default App
