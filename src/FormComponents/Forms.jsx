import React, { useState } from "react";
import "./Forms.css";

const Forms = ({ type = "basic", onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className={`form-container ${type}`}>
      {type === "basic" && (
        <form onSubmit={handleSubmit} className="form-basic">
          <h2>Basic Form</h2>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </label>
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      )}

      {type === "contact" && (
        <form onSubmit={handleSubmit} className="form-contact">
          <h2>Contact Form</h2>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
            ></textarea>
          </label>
          <button type="submit" className="btn-submit">
            Send
          </button>
        </form>
      )}

      {type === "login" && (
        <form onSubmit={handleSubmit} className="form-login">
          <h2>Login Form</h2>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </label>
          <button type="submit" className="btn-submit">
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export const FormsExamples = () => {
  const handleSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="forms-examples">
      <h2>Form Examples</h2>
      <div className="example">
        <Forms type="basic" onSubmit={handleSubmit} />
      </div>
      <div className="example">
        <Forms type="contact" onSubmit={handleSubmit} />
      </div>
      <div className="example">
        <Forms type="login" onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Forms;
