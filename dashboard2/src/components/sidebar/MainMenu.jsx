import "./MainMenu.css";
import MenuButton from "./MenuButton.jsx";

// importing the icons
import smarthomeIcon from "../../../public/smarthome.svg";
import watchlistIcon from "../../../public/watchlist-icon.png";
import transacIcon from "../../../public/transac-icon.png";
import withdrawlIcon from "../../../public/withdrawl-icon.png";

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

    </menu>
  );
};

export default  MainMenu;
