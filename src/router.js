import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Router() {
  return (
    <BrowserRouter>
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/contact/:id" component={Contact} />
    </BrowserRouter>
  );
}

export default Router;
