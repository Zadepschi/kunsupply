import "./Header.css";

import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />

        <Navigation />

        <MobileMenu />
      </div>
    </header>
  );
};