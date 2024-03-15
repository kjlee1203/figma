import Sidebar from "../components/sidebar/Sidebar";


import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="menu">
        <Sidebar />
      </div>

      <main className="months-labels">
        <section className="card">

        </section>
      </main>

    </div>
  );
};

export default Dashboard;
