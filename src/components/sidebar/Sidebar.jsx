import { NavLink, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard"},
    { name: "My Products", path: "/product"},
    { name: "Orders", path: "/order"},
    { name: "Earnings", path: "/earning"},
    { name: "Analytics", path: "/analytics"},
    { name: "Messages", path: "/message"},
    { name: "Settings", path: "/setting"},
  ];

  return (
    <aside className="seller-sidebar bg-dark text-white p-3 vh-100">
      <h4 className="mb-4 text-center border-bottom pb-2">Menu</h4>
      <nav>
        <ul className="nav flex-column gap-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path} className="nav-item">
                <NavLink
                  href={item.path}
                  className={`nav-link text-white ${
                    isActive ? "active bg-primary rounded px-3 fw-semibold" : ""
                  }`}
                >
                  <i className="me-2">{item.icon}</i> {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
