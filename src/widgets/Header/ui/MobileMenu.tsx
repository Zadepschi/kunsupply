import { useState } from "react";
import { navigation } from "../model/navigation";
import { NavLink } from "react-router-dom";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="mobile-menu">
      <button
        className="burger-button"
        onClick={() => setOpen(!open)}
        aria-label="Open menu"
      >
        ☰
      </button>

      {open && (
        <nav className="mobile-nav">
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  onClick={handleClose}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};