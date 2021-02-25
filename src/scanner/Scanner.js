import { useState } from "react";
import QrReader from "react-qr-reader";

const Scanner = () => {
  const [scanResult, setScanResult] = useState(null);
  const [scanSuccess, setScanSuccess] = useState(false);

  const clearScanResult = () => {
    setScanResult(null);
    setScanSuccess(false);
  };

  const handleScan = (data) => {
    if (data) {
      let result;
      try {
        result = JSON.parse(data);
        isValidData(result) ? setScanSuccess(true) : setScanResult(false);
        setScanResult(result);
      } catch (e) {
        console.log(data);
        setScanResult(true);
        setScanSuccess(false);
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
    setScanResult(true);
    setScanSuccess(false);
  };

  const isValidData = (data) => {
    if (
      "id" in data &&
      "name" in data &&
      "type" in data &&
      "date_of_birth" in data &&
      "owner_name" in data &&
      "owner_mobile" in data &&
      "address" in data
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className="scanner-section container">
      <div className="heading">QR Code Scanner</div>
      <hr />
      <div className="scanner-container">
        <div>
          {!scanResult && (
            <div className="scanner">
              <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: "100%" }}
              />
            </div>
          )}
          {scanResult && (
            <>
              {scanSuccess && (
                <div className="scan-success">
                  <div className="result bg-green-100 text-green-800">
                    Entry successfully recorded!
                  </div>
                  <div className="pet">
                    <div className="top-container">
                      <div className="image-container">
                        <img src={`/pets/${scanResult.type}.png`} alt="Pet" />
                      </div>
                      <div className="pet-information">
                        <div className="pet-name">{scanResult.name}</div>
                        <div className="age">17 Years old</div>
                        <div className="dob-container">
                          <i className="material-icons">cake</i>
                          <span>{scanResult.date_of_birth}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-container">
                      <div className="owner-info-title">
                        Owner's Information
                      </div>
                      <div className="owner-name">{scanResult.owner_name}</div>
                      <div className="mobile-info">
                        <i className="material-icons">phone</i>
                        <span>+91 {scanResult.owner_mobile}</span>
                      </div>
                      <div className="address">{scanResult.address}</div>
                    </div>
                  </div>
                </div>
              )}
              {!scanSuccess && (
                <>
                  <div className="result bg-red-100 text-red-800">
                    QR Code does't contain valid pet data.
                  </div>
                </>
              )}
              <button
                className="btn btn-primary"
                type="button"
                onClick={clearScanResult}
              >
                Scan Again
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Scanner;
