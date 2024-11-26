import React, { useState } from "react";
import "./Table.css";

const Table = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  const data = [
    {
      id: 1,
      name: "John Doe",
      age: 28,
      role: "Developer",
      details: "Loves coding and coffee.",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 34,
      role: "Designer",
      details: "Passionate about UI/UX.",
    },
    {
      id: 3,
      name: "Sam Wilson",
      age: 25,
      role: "Project Manager",
      details: "Excellent at team coordination.",
    },
    {
      id: 4,
      name: "Lisa Brown",
      age: 29,
      role: "QA Tester",
      details: "Has an eye for detail.",
    },
  ];

  const toggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div className="table-container">
      <table className="animated-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Role</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <React.Fragment key={item.id}>
              <tr className="table-row" onClick={() => toggleRow(item.id)}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.role}</td>
                <td>
                  <button className="details-btn">
                    {expandedRow === item.id ? "Hide" : "Show"} Details
                  </button>
                </td>
              </tr>
              {expandedRow === item.id && (
                <tr className="details-row">
                  <td colSpan="5">
                    <div className="details-content">{item.details}</div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
