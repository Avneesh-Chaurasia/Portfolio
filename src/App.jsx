import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Education from "./Components/Education"
import Project from "./Components/Project"
import Skills from "./Components/Skills"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import './style.css'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* Media Query for screens larger than 600px */
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const StyledItem = styled.div`
  background-color: lightgreen;
  padding: 1rem;
  text-align: center;
`;

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App