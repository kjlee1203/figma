import "./MainMenu.css";
import smarthomeIcon from "../../../public/smarthome.svg";
import watchlistIcon from "../../../public/watchlist-icon.png";
import transacIcon from "../../../public/transac-icon.png";
import withdrawlIcon from "../../../public/withdrawl-icon.png";
import MenuButton from "./MenuButton.jsx";

const MainMenu = () => {
  const handleMenuClick = () => {
    alert('Div clicked!');
    // You can add any other actions you want to perform when the div is clicked
  };



  return (
    <menu className="apps-pages">
      <MenuButton
        image={smarthomeIcon}
        onSelect={() => handleMenuClick()}>
        Dashboard
      </MenuButton>

      <MenuButton
        image={watchlistIcon}
        onSelect={() => handleMenuClick()}>
        Watchlist
      </MenuButton>

      <MenuButton
        image={transacIcon}
        onSelect={() => handleMenuClick()}>
        Transaction
      </MenuButton>

      <MenuButton
        image={withdrawlIcon}
        onSelect={() => handleMenuClick()}>
        Withdrawl
      </MenuButton>

    </menu>
  );
};

export default  MainMenu;
