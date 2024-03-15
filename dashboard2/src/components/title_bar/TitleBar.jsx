import "./Titlebar.css";
import johnDoeIcon from "../../../public/johndoe.png";

const Titlebar = () => {
  return (
    <div className="navbar">
      <div className="navbar1">
        <div className="search">
          <h1 className="dashboard2">Dashboard</h1>
        </div>
        <div className="action">
          <div className="span">
            <div className="user-parent">
              <div className="user" />
              <img
                className="user-icon"
                loading="lazy"
                alt="aaaaa"
                src={johnDoeIcon}
              />
            </div>
            <div className="john-doe">John Doe</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Titlebar;
