import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-900 border-b border-gray-700 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MySpace</h1>
      <div className="space-x-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`text-sm font-medium ${
              location.pathname === item.path
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
