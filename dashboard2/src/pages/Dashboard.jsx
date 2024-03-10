import Logo from "../components/Logo";
import MainMenu from "../components/sidebar/MainMenu";
import Todo from "../components/sidebar/Todo";
import Settings from "../components/sidebar/Settings";

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
          <Todo />
          

          <div className="section2">
            <div className="settings">SETTINGS</div>
          </div>
          <Settings />


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
