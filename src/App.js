import GlobalStyled from "./components/GlobalStyled";
import { Nav } from "./components/Nav";
import { ContactUs } from "./pages/ContactUs";
import { OurWork } from "./pages/OurWork";
import { AboutUs } from "./pages/AboutUs";

import { Switch, Route, useLocation } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyled />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetails />
          </Route>
          <Route path="/contact" component={ContactUs}></Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
