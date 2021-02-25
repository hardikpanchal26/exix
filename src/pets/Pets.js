import { QRCode } from "react-qr-svg";

const Pets = ({ pets }) => {
  return (
    <div className="pets-section container">
      <div className="heading">Pets</div>
      <hr />
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
    </div>
  );
};

export default Pets;
