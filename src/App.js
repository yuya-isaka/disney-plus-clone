import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login.js";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Detail from "./components/Detail.js";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
