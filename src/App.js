import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="App">
      <>
        <Topbar />
        <Navbar />
        <Hero />
      </>
    </div>
  );
}

export default App;
