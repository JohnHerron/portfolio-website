import './App.css';
import Nav from "./components/Nav";
import PageContainer from "./components/PageContainer"
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact"
import Projects from './components/Projects';

function App() {

  return (
    <>
      <Nav />
      <PageContainer>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </PageContainer>
    </>
  );
}

export default App;