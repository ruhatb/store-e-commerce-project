import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFemale, FaMale, FaChild, FaChevronDown } from "react-icons/fa"; // Import icons from react-icons library

const urls = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "/shop", text: "shop" },
  { id: 3, url: "/about", text: "about" },
  { id: 4, url: "/blog", text: " blog" },
  { id: 5, url: "/contact", text: "contact" },
  { id: 6, url: "/pages", text: "pages" },
];

const Navlinks = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {urls.map((link) => {
        const { id, url, text } = link;

        if (url === "/shop") {
          return (
            <li key={id} className="shop-dropdown-container">
              <div className="shop-link" onClick={toggleDropdown}>
                <NavLink className="capitalize" to={url}>
                  {text}
                </NavLink>
                <FaChevronDown
                  className={`dropdown-icon ${isDropdownOpen ? "open" : ""}`}
                />
              </div>
              {isDropdownOpen && (
                <div
                  className={`mini-lite ${isDropdownOpen ? "open" : ""}`}
                  onClick={toggleDropdown}
                >
                  {/* Mini icon and tooltip for "shop" link */}
                  <span className="block p-2">
                    <NavLink to="/shop/child" className="text-black">
                      <FaChild className="inline-block" /> Child
                    </NavLink>
                  </span>
                  <span className="block p-2">
                    <NavLink to="/shop/woman" className="text-black">
                      <FaFemale className="inline-block" /> Woman
                    </NavLink>
                  </span>
                  <span className="block p-2">
                    <NavLink to="/shop/man" className="text-black">
                      <FaMale className="inline-block" /> Man
                    </NavLink>
                  </span>
                </div>
              )}
            </li>
          );
        }

        // For other links
        return (
          <li key={id}>
            <NavLink className="capitalize" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default Navlinks;
