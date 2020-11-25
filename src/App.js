import GlobalStyled from "./components/GlobalStyled";
import { Nav } from "./components/Nav";

const { AboutUs } = require("./pages/AboutUs");

function App() {
  return (
    <div className="App">
      <GlobalStyled />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
