import * as React from "react";
import { render } from "react-dom";
import FilteredTable from "/src/FilteredTable";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <FilteredTable />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
