import './App.css';
import Nav from "./components/Nav";
import PageContainer from "./components/PageContainer"
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from './components/Projects';

function App() {

  return (
    <>
      <Nav />
      <PageContainer>
        <About />
        <Experience />
        <Projects />
      </PageContainer>
    </>
  );
}

export default App;