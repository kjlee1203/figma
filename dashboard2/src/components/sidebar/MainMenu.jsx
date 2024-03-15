import "./MainMenu.css";
import MenuButton from "./MenuButton.jsx";
import Logo from "./Logo.jsx";

import Settings from "./Settings";


// importing the icons
import smarthomeIcon from "../../../public/smarthome.svg";
import watchlistIcon from "../../../public/watchlist-icon.png";
import transacIcon from "../../../public/transac-icon.png";
import withdrawlIcon from "../../../public/withdrawl-icon.png";
// icons
import pfIcon from "../../../public/pf-icon.png";
import alertsIcon from "../../../public/alerts-icon.png";
import analyticsIcon from "../../../public/analytics-icon.png";
import manageIcon from "../../../public/manage-icon.png";


// to remember the selected menu
import { useState } from "react";

const MainMenu = () => {

  const [selectedMenu, setSelectedMenu] = useState();

  const handleMenuClick = (selectedDiv) => {
    setSelectedMenu(selectedDiv);
    alert(selectedDiv + ' was clicked');
    // You can add any other actions you want to perform when the div is clicked
  };



  return (

    <div className="menu1">
      <Logo />
      
      <div className="section">
        <div className="main-menu">MAIN MENU</div>
      </div>

      <menu className="apps-pages">
        <MenuButton
          image={smarthomeIcon}
          isSelected={selectedMenu === 'dashboard'}
          onSelect={() => handleMenuClick('dashboard')}>
          Dashboard
        </MenuButton>

        <MenuButton
          image={watchlistIcon}
          isSelected={selectedMenu === 'watchlist'}
          onSelect={() => handleMenuClick('watchlist')}>
          Watchlist
        </MenuButton>

        <MenuButton
          image={transacIcon}
          isSelected={selectedMenu === 'transaction'}
          onSelect={() => handleMenuClick('transaction')}>
          Transaction
        </MenuButton>

        <MenuButton
          image={withdrawlIcon}
          isSelected={selectedMenu === 'withdrawl'}
          onSelect={() => handleMenuClick('withdrawl')}>
          Withdrawl
        </MenuButton>


        <MenuButton
          image={manageIcon}
          isSelected={selectedMenu === 'manage account'}
          onSelect={() => handleMenuClick('manage account')}>
          Manage Account
        </MenuButton>


      </menu>

      
      <div className="section1">
        <div className="todo">TODO</div>
      </div>

      <menu className="apps-pages1">
        <MenuButton
          image={pfIcon}
          isSelected={selectedMenu === 'portfolio'}
          onSelect={() => handleMenuClick('portfolio')}>
          Portfolio
        </MenuButton>

        <MenuButton
          image={alertsIcon}
          isSelected={selectedMenu === 'alerts'}
          onSelect={() => handleMenuClick('alerts')}>
          Alerts
        </MenuButton>

        <MenuButton
          image={analyticsIcon}
          isSelected={selectedMenu === 'analytics'}
          onSelect={() => handleMenuClick('analytics')}>
          Analytics
        </MenuButton>
      </menu>




      

      <div className="section2">
        <div className="settings">SETTINGS</div>
      </div>
      <Settings />


    </div>







    

  );
};

export default  MainMenu;
