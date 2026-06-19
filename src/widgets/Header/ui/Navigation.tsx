import { navigation } from "../model/navigation";
import { NavigationItem } from "./NavigationItem";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navigation.map((item) => (
          <li key={item.href}>
            <NavigationItem item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};