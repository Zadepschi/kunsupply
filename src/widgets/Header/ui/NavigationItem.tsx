import { NavLink } from "react-router-dom";
import type { NavItem } from "../types/navigation.types";

interface Props {
  item: NavItem;
}

export const NavigationItem = ({ item }: Props) => {
  return (
    <NavLink
      to={item.href}
      className={({ isActive }) =>
        isActive
          ? "navigation__link active"
          : "navigation__link"
      }
    >
      {item.label}
    </NavLink>
  );
};