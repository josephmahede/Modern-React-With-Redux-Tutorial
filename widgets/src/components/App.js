import React, { useState } from "react";
import Accordion from "./Accordion";
import WikiSearch from "./WikiSearch";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Bar from "./Bar";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const dropdownOptions = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Blue",
    value: "blue",
  },
  {
    label: "Green",
    value: "green",
  },
];

const App = () => {
  const [selected, setSelected] = useState(dropdownOptions[0]);
  return (
    <div className="ui container">
      <Bar />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <WikiSearch />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={dropdownOptions}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
