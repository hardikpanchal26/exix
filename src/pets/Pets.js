import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { QRCode } from "react-qr-svg";

const Pets = ({ pets, setPets }) => {
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    id: null,
    name: "",
    type: "",
    date_of_birth: "",
    owner_name: "",
    owner_mobile: "",
    address: "",
  });

  const setFormField = (e, field) => {
    if (field === "name") {
      setFormData({ ...formData, name: e.target.value });
    }
    if (field === "type") {
      setFormData({ ...formData, type: e.target.value });
    }
    if (field === "date_of_birth") {
      setFormData({ ...formData, date_of_birth: e.target.value });
    }
    if (field === "owner_name") {
      setFormData({ ...formData, owner_name: e.target.value });
    }
    if (field === "owner_mobile") {
      setFormData({ ...formData, owner_mobile: e.target.value });
    }
    if (field === "address") {
      setFormData({ ...formData, address: e.target.value });
    }
  };

  const resetFormData = () => {
    setFormData({
      id: null,
      name: "",
      type: "",
      date_of_birth: "",
      owner_name: "",
      owner_mobile: "",
      address: "",
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitDetails = () => {
    if (
      formData.name === "" ||
      formData.type === "" ||
      formData.date_of_birth === "" ||
      formData.owner_name === "" ||
      formData.owner_mobile === "" ||
      formData.address === ""
    ) {
      alert("Invalid input data");
      return;
    } else {
      handleClose();
      setFormData({ ...formData, id: new Date().getUTCMilliseconds() });
      setPets([formData, ...pets]);
      resetFormData();
      alert("New Pet Profile create successfully!!!");
    }
  };
  return (
    <div className="pets-section container">
      <div className="heading">Pets</div>
      <hr />
      <button
        className="btn btn-primary mt-4 create-btn"
        type="button"
        onClick={handleShow}
      >
        Create New Pet Profile
      </button>
      <div className="row pets-container">
        {pets.map((pet) => (
          <div key={pet.id} className="pet-container col-12 col-md-6 col-lg-4">
            <div className="pet">
              <div className="top-container">
                <div className="image-container">
                  <img src={`/pets/${pet.type}.png`} alt="Pet" />
                </div>
                <div className="pet-information">
                  <div className="pet-name">{pet.name}</div>
                  <div className="age">17 Years old</div>
                  <div className="dob-container">
                    <i className="material-icons">cake</i>
                    <span>{pet.date_of_birth}</span>
                  </div>
                </div>
              </div>
              <div className="qr-code-container">
                <div className="qr-code">
                  <QRCode
                    level="Q"
                    style={{ width: 256 }}
                    value={JSON.stringify(pet)}
                  />
                </div>
              </div>
              <div className="bottom-container">
                <div className="owner-info-title">Owner's Information</div>
                <div className="owner-name">{pet.owner_name}</div>
                <div className="mobile-info">
                  <i className="material-icons">phone</i>
                  <span>+91 {pet.owner_mobile}</span>
                </div>
                <div className="address">{pet.address}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Create New Pet Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label className="form-label">Pet Name</label>
            <input
              className="form-control"
              value={formData.name}
              required
              onBlur={(e) => setFormField(e, "name")}
              onChange={(e) => setFormField(e, "name")}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Pet Type</label>
            <select
              className="form-select"
              value={formData.type}
              onChange={(e) => setFormField(e, "type")}
            >
              <option value="">--Select--</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Pet's Date of Bith</label>
            <input
              className="form-control"
              type="date"
              value={formData.date_of_birth}
              required
              onBlur={(e) => setFormField(e, "date_of_birth")}
              onChange={(e) => setFormField(e, "date_of_birth")}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Owner Name</label>
            <input
              className="form-control"
              value={formData.owner_name}
              required
              onBlur={(e) => setFormField(e, "owner_name")}
              onChange={(e) => setFormField(e, "owner_name")}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Owner Mobile</label>
            <input
              className="form-control"
              value={formData.owner_mobile}
              required
              onBlur={(e) => setFormField(e, "owner_mobile")}
              onChange={(e) => setFormField(e, "owner_mobile")}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea
              className="form-control"
              value={formData.address}
              required
              onBlur={(e) => setFormField(e, "address")}
              onChange={(e) => setFormField(e, "address")}
              rows="3"
            ></textarea>
          </div>
          <button
            className="btn btn-primary"
            type="button"
            onClick={submitDetails}
          >
            Submit Details
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Pets;
