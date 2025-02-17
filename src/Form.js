import { useState } from "react";

const Form = ({ addEntry }) => {
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.age) {
      alert("Please fill in all fields!");
      return;
    }
    addEntry(formData);
    setFormData({ name: "", email: "", age: "" });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">User Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
          className="input-field"
        />
        <button type="submit" className="add-button">Add</button>
      </form>
    </div>
  );
};

export default Form;

// import { useState } from "react";

// const Form = ({ addEntry }) => {
//   const [formData, setFormData] = useState({ name: "", email: "", age: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.age) {
//       alert("Please fill in all fields!");
//       return;
//     }
//     addEntry(formData);
//     setFormData({ name: "", email: "", age: "" });
//   };

//   return (
//     <div className="form-container">
//       <h2 className="form-title">User Form</h2>
//       <form onSubmit={handleSubmit} className="form">
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="input-field"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="input-field"
//         />
//         <input
//           type="number"
//           name="age"
//           placeholder="Enter Age"
//           value={formData.age}
//           onChange={handleChange}
//           className="input-field"
//         />
//         <button type="submit" className="add-button">Add</button>
//       </form>
//     </div>
//   );
// };

// export default Form;
