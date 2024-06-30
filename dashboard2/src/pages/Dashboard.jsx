import Sidebar from "../components/sidebar/Sidebar";
import Titlebar from "../components/title_bar/TitleBar";
import MyStock from "../components/mystock/MyStock";
import TotalBalanceGraph from "../components/total_balance_graph/TotalBalanceGraph";
import ManageWatchlistComponent from "../components/manage_watchlist/manage_watchlist";

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
          <ManageWatchlistComponent />


          <TotalBalanceGraph />
        </section>
      </main>

    </div>
  );
};

export default Dashboard;
