import Logo from "../components/Logo";
import MainMenu from "../components/sidebar/MainMenu";
import Todo from "../components/sidebar/Todo";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="menu">
        <div className="menu1">
          <Logo />
          <div className="section">
            <div className="main-menu">MAIN MENU</div>
          </div>
          <MainMenu />
          <div className="section1">
            <div className="todo">TODO</div>
          </div>
          <h1>AppsPages</h1>
          <div className="section2">
            <div className="settings">SETTINGS</div>
          </div>

          <div className="components">
            <div className="list">
              <img
                className="user-circle-icon"
                loading="lazy"
                alt="usercircle.svg"
                src="/usercircle.svg"
              />
              <div className="manage-account">Manage Account</div>
              <div className="badge">
                <div className="div">4</div>
              </div>
              <img
                className="chevron-right-icon"
                alt="chevronright.svg"
                src="/chevronright.svg"
              />
            </div>
          </div>

        </div>
      </div>

      <main className="months-labels">
        <section className="card">

        </section>
      </main>

    </div>
  );
};

export default Dashboard;
