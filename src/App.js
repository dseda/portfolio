import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Intro from "./Intro";
import ProjectList from "./ProjectList";
function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <ProjectList />
    </div>
  );
}

export default App;
