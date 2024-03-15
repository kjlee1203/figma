import "./Logo.css";
import logoImg from "../../../public/logo.svg";
const Logo = () => {
  return (
    <div className="logo">
      <img className="logo-icon" loading="lazy" alt="logo.svg" src={logoImg} />
      <h2 className="fba-quant">FBA Quant</h2>
    </div>
  );
};

export default Logo;
