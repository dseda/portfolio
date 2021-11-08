import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Intro from "./Intro";
import ProjectList from "./ProjectList";
import About from "./About";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <ProjectList />
      <About />
      <Footer />
    </div>
  );
}

export default App;
