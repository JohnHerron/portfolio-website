import './App.css';
import Nav from "./components/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import PageContainer from "./components/PageContainer"

function App() {

  return (
    <>
      <Nav />
      <PageContainer>
        <About />
        <Experience />
        {/* <Projects /> */}
      </PageContainer>
    </>
  );
}

export default App;