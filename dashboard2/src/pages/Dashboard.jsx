import Sidebar from "../components/sidebar/Sidebar";
import Titlebar from "../components/title_bar/TitleBar";
import MyStock from "../components/mystock/MyStock";


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
          <MyStock/>
        </section>
      </main>

    </div>
  );
};

export default Dashboard;
