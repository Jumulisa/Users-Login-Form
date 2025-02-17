const Table = ({ entries, deleteEntry, updateEntry }) => {
    return (
      <div className="table-container">
        <h2 className="table-title">User List</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>{entry.age}</td>
                <td>
                  <button className="update-button" onClick={() => updateEntry(index)}>Update</button>
                  <button className="delete-button" onClick={() => deleteEntry(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;
  
// const Table = ({ entries, deleteEntry, updateEntry }) => {
//     return (
//       <div className="table-container">
//         <h2 className="table-title">User List</h2>
//         <table className="data-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Age</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//   {entries.map((entry, index) => (
//     <tr key={index}>
//       <td>{entry.name}</td>
//       <td>{entry.email}</td>
//       <td>{entry.age}</td>
//       <td>
//         <button className="update-button" onClick={() => handleUpdate(index)}>Update</button>
//         <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
//       </td>
//     </tr>
//   ))}
// </tbody>
         
//         </table>
//       </div>
//     );
//   };
  
//   export default Table;
  
