import classNames from "classnames";

const Header = ({ activeTab, setActiveTab }) => (
  <div>
    <div className="header">
      <div className="container">
        <div className="logo-container">
          <img className="logo" src="/pexix_logo.png" alt="Pexix" />
        </div>
        <div className="nav-container">
          <div className="nav">
            <div
              className={classNames("nav-item", {
                active: activeTab === "dashboard",
              })}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("dashboard");
              }}
            >
              <i className="material-icons py-1">dashboard</i>
              <span>Dashboard</span>
            </div>
            <div
              className={classNames("nav-item", {
                active: activeTab === "scanner",
              })}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("scanner");
              }}
            >
              <i className="material-icons py-1">qr_code_scanner</i>
              <span>Scan Pet</span>
            </div>
            <div
              className={classNames("nav-item", {
                active: activeTab === "pets",
              })}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("pets");
              }}
            >
              <i className="material-icons py-1">pets</i>
              <span>Pets</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
