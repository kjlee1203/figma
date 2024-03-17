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
       
          <iframe src="https://www.naver.com" width="600" height="400" frameBorder="0"></iframe>
        </section>
      </main>

    </div>
  );
};

export default Dashboard;
