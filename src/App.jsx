// for routing
import { BrowserRouter } from "react-router-dom"

// importing components
import {
  About,
  Experience,
  Hero,
  Navbar,
  Projects,
  Tech,
  //particles on page
  StarsCanvas
} from './components';

const App = () => {

  return (
    <BrowserRouter> //listens for URL changes
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        {/* this section is separate because this is where we display our particles and particle canvas */}
        <div className="relative z-0">
          <About />
          <Experience />

          <Projects />
          <Tech />
          <StarsCanvas />
        </div>
      </div>

    </BrowserRouter>
  )
}

export default App
