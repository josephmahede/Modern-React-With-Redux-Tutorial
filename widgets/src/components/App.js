import React, { useState } from "react";
import Accordion from "./Accordion";
import WikiSearch from "./WikiSearch";
import Dropdown from "./Dropdown";

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
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div className="ui container">
      {/* <Accordion items={items} /> */}
      {/* <WikiSearch /> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ?
        <Dropdown
          options={dropdownOptions}
          selected={selected}
          onSelectedChange={setSelected}
        /> : null
      }
    </div>
  );
};

export default App;
