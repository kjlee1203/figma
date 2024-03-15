import MainMenu from "../components/sidebar/MainMenu";


import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="menu">
    <MainMenu />
      </div>

      <main className="months-labels">
        <section className="card">

        </section>
      </main>

    </div>
  );
};

export default Dashboard;
