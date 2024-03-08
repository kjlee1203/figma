import AppsPages1 from "../components/AppsPages1";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="menu">
        <div className="menu1">
          <h1>Logo</h1>
          <div className="section">
            <div className="main-menu">MAIN MENU</div>
          </div>
          <h1>apps pages 1</h1>
          <AppsPages1 />
          <div className="section1">
            <div className="todo">TODO</div>
          </div>
          <h1>apps pages </h1>
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
