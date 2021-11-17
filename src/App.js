import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import Signed from "./pages/Signed";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Signup setUser={setUser} />
        </Route>
        <Route path="/signed/:user">
          <Signed />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
