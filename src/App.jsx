import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Gallery from "./components/Gallery"
import About from "./components/About"
import Location from "./components/Location"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
