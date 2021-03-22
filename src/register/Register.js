import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    password: "",
  });

  const setFormField = (e, field) => {
    let data = { ...formData };
    data[field] = e.target.value;
    setFormData(data);
  };
  return (
    <div className="register-section container">
      <div className="register">
        <div className="heading">Store Registration</div>
        <br />
        <div className="mb-3">
          <label className="form-label">Store name</label>
          <input
            className="form-control"
            value={formData.name}
            required
            onBlur={(e) => setFormField(e, "name")}
            onChange={(e) => setFormField(e, "name")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Store owner mobile number</label>
          <input
            className="form-control"
            value={formData.name}
            required
            onBlur={(e) => setFormField(e, "number")}
            onChange={(e) => setFormField(e, "number")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            className="form-control"
            type="password"
            value={formData.name}
            required
            onBlur={(e) => setFormField(e, "password")}
            onChange={(e) => setFormField(e, "password")}
          />
        </div>
        <br />
        <button
          className="btn btn-primary"
          type="button"
          onClick={(e) => e.preventDefault()}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
