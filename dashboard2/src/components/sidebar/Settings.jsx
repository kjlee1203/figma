import "./Settings.css";
import MenuButton from "./MenuButton.jsx";

// icons
import manageIcon from "../../../public/manage-icon.png";


// to remember the selected menu
import { useState } from "react";

const Settings = () => {

  const [selectedMenu, setSelectedMenu] = useState();

  const handleMenuClick = (selectedDiv) => {
    setSelectedMenu(selectedDiv);
    alert(selectedDiv + ' was clicked');
    // You can add any other actions you want to perform when the div is clicked
  };

  
  return (
    <menu className="apps-pages1">

      <MenuButton
        image={manageIcon}
        isSelected={selectedMenu === 'manage account'}
        onSelect={() => handleMenuClick('manage account')}>
        Manage Account
      </MenuButton>


    </menu>
  );
};

export default Settings;
