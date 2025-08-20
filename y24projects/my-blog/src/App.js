import './index.css';
import Navbar from './NavBar.js';
import Home from './Home.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        Hello World
      </div>
      <Home />
    </div>
  );
}

export default App;