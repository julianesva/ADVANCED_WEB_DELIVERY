import React, { useState } from 'react';

// Main ListActivity component
const ListActivity = () => {
  const [inputValue, setInputValue] = useState(""); 
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  
  const addListElement = () => {
    if (inputValue.trim() !== "") {
      setList([...list, inputValue]);
      setInputValue(""); 
    }
  };

  return (
    <div>
      <h1>List Of Elements</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter an element"
        className="border p-2 rounded w-full"
      />
      <button onClick={addListElement}>Add Element</button>
      <ul>
        {list.map((item, index) => (<li key={index}>{item}</li>))}
      </ul>
    </div>
  );
};

// Parent component that controls visibility
const App = () => {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div>
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? 'Hide' : 'Show'} Component
      </button>
      {showComponent && <ListActivity />}
    </div>
  );
};

export default App;