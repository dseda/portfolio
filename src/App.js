import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Intro from "./Intro";
import ProjectList from "./ProjectList";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default App;
