import { Link } from "react-router-dom";
import logoImage from "../../../assets/logo.png";

export const Logo = () => {
  return (
    <Link to="/">
      <img
        src={logoImage}
        alt="KunSupply"
        className="logo-image"
      />
    </Link>
  );
};