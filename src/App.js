import { useState } from "react";
import Form from "./Form";
import Table from "./Table";
import "./App.css";

const App = () => {
  const [entries, setEntries] = useState([]);

  const addEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
  };

  const deleteEntry = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  const updateEntry = (index) => {
    const updatedName = prompt("Enter new name:", entries[index].name);
    const updatedEmail = prompt("Enter new email:", entries[index].email);
    const updatedAge = prompt("Enter new age:", entries[index].age);
    
    if (updatedName && updatedEmail && updatedAge) {
      const updatedEntries = [...entries];
      updatedEntries[index] = { name: updatedName, email: updatedEmail, age: updatedAge };
      setEntries(updatedEntries);
    }
  };

  return (
    <div className="container">
      <Form addEntry={addEntry} />
      {entries.length > 0 && <Table entries={entries} deleteEntry={deleteEntry} updateEntry={updateEntry} />}
    </div>
  );
};

export default App;


// import FormTable from "./Form";

// function App() {
//   return <FormTable />;
// }

// export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
