import "./Todo.css";
import MenuButton from "./MenuButton.jsx";

// icons
import pfIcon from "../../../public/pf-icon.png";
import alertsIcon from "../../../public/alerts-icon.png";
import analyticsIcon from "../../../public/analytics-icon.png";

// to remember the selected menu
import { useState } from "react";

const Todo = () => {

  const [selectedMenu, setSelectedMenu] = useState();

  const handleMenuClick = (selectedDiv) => {
    setSelectedMenu(selectedDiv);
    alert(selectedDiv + ' was clicked');
    // You can add any other actions you want to perform when the div is clicked
  };

  
  return (
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
  );
};

export default Todo;
