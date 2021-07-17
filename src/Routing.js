import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Explorer from "./components/Explorer";
import Editor from "./components/Editor";

function Routing({ html, setHtml }) {
  return (
    <Router>
      <Explorer />
      <Switch>
        <Route
          path="/html/edit"
          component={() => (
            <Editor language="xml" onChange={setHtml} value={html} />
          )}
        />
      </Switch>
    </Router>
  );
}

export default Routing;
