import GlobalStyled from "./components/GlobalStyled";

const { AboutUs } = require("./pages/AboutUs");

function App() {
  return (
    <div className="App">
      <GlobalStyled />
      <AboutUs />
    </div>
  );
}

export default App;
