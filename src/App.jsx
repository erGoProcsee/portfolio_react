import { BrowserRouter } from "react-router-dom"

import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Projects,
  StarsCanvas
} from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div class="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="relative z-0">
          <About />
          <Tech />
          <Experience />

          <Projects />
          <StarsCanvas />
        </div>
      </div>

    </BrowserRouter>
  )
}

export default App
