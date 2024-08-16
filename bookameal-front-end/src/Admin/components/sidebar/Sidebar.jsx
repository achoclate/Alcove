import { Link } from "react-router-dom";
import "./sidebar.css";
import {
  Home,
  Group,
  Payment,
  Restaurant,
  MenuBook,
  Fastfood,
  Event,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/admin" className="link">
              <li className="sidebarListItem">
                <Home className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/admin/users" className="link">
              <li className="sidebarListItem">
                <Group className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/admin/transactions" className="link">
              <li className="sidebarListItem">
                <Payment className="sidebarIcon" />
                Transactions
              </li>
            </Link>
            <Link to="/admin/food-orders" className="link">
              <li className="sidebarListItem">
                <Restaurant className="sidebarIcon" />
                Food Orders
              </li>
            </Link>
            <Link to="/admin/food-menu" className="link">
              <li className="sidebarListItem">
                <MenuBook className="sidebarIcon" />
                Food Menu
              </li>
            </Link>
            <Link to="/admin/meals" className="link">
              <li className="sidebarListItem">
                <Fastfood className="sidebarIcon" />
                Meals
              </li>
            </Link>
            <Link to="/admin/reservations" className="link">
              <li className="sidebarListItem">
                <Event className="sidebarIcon" />
                Reservations
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
