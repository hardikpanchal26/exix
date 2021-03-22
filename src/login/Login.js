import { useState } from "react";
import Cookies from "universal-cookie";

const Login = ({ setStore, setActiveTab }) => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const cookies = new Cookies();

  const setFormField = (e, field) => {
    let data = { ...formData };
    data[field] = e.target.value;
    setFormData(data);
  };

  const login = () => {
    if (formData.name === "pexix" && formData.password === "pexix") {
      const store = { name: "Pexix", number: "9990999099" };
      setStore(store);
      cookies.set("store", store);
      setActiveTab("dashboard");
    } else {
      alert("Invalid credentials!!!");
      setFormData({
        name: "",
        password: "",
      });
    }
  };

  return (
    <div className="register-section container">
      <div className="register">
        <div className="heading">Store Login</div>
        <br />
        <div className="mb-3">
          <label className="form-label">Store username</label>
          <input
            className="form-control"
            value={formData.name}
            required
            onBlur={(e) => setFormField(e, "name")}
            onChange={(e) => setFormField(e, "name")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            className="form-control"
            type="password"
            value={formData.password}
            required
            onBlur={(e) => setFormField(e, "password")}
            onChange={(e) => setFormField(e, "password")}
          />
        </div>
        <br />
        <button
          className="btn btn-primary"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            login();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
