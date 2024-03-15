import Sidebar from "../components/sidebar/Sidebar";
import Titlebar from "../components/title_bar/TitleBar";


import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="menu">
        <Sidebar />
      </div>

      <main className="months-labels">
        <section className="card">
          <Titlebar/>
        </section>
      </main>

    </div>
  );
};

export default Dashboard;
