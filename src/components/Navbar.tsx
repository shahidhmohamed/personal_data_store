import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faDatabase,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const navItems = [
    { name: "Form", icon: faIdCard, path: "/form" },
    { name: "All Data", icon: faDatabase, path: "/data" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-gray-800 bg-opacity-50 backdrop-blur ${
        isOpen ? "w-40" : "w-14"
      } transition-width duration-300 z-30`} /* Ensure z-index is high enough */
    >
      <div className="flex flex-col h-full p-2">
        <header className="flex justify-center">
          <button
            type="button"
            className="text-white focus:outline-none"
            onClick={handleNavClick}
          >
            <FontAwesomeIcon
              icon={isOpen ? faChevronLeft : faChevronRight}
              size="lg"
            />
          </button>
        </header>
        <nav className="mt-10 space-y-6 items-center mx-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="w-full text-left text-white flex items-center space-x-2 focus:outline-none"
            >
              <FontAwesomeIcon icon={item.icon} className="mr-2" size="lg" />
              {isOpen && <span className="block text-lg">{item.name}</span>}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
