import "./App.css";
import SidebarNav from "./components/SidebarNav";
import Intro from "./components/Intro";
import About from "./components/About";
import Credits from "./components/Credits";
import Projects from "./components/Projects";
import Formation from "./components/Formation";

function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Formation></Formation>
        <Projects></Projects>
        <Credits></Credits>
      </div>
      <SidebarNav />
    </div>
  );
}

export default App;
