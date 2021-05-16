// あまりよく分かっていない
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login.js";
import Header from "./components/Header.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
