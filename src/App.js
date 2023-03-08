import "./App.css";
import { Header } from "./components/header";
import HomeScene from "./scenes/home/scene";
function App() {
  return (
    <div className="App">
      <Header />
      <HomeScene />
    </div>
  );
}

export default App;
