import ReactSwitch from "react-switch";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topleft">
        <h2>King Of Joker</h2>
      </div>
      <div className="topright">
        <div className="trone">
          <span className="swichtheme">Switch Theme</span>
          <span className="switch">
            <ReactSwitch />
          </span>
        </div>
        <div className="circleImg"></div>
      </div>
    </div>
  );
};

export default TopBar;
