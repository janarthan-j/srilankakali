import React from "react";
import Link from "next/link";

const NavLinks = ({ extraClassName }) => {
  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className={`main-menu__list ${extraClassName}`}>
      <li className="dropdown">
        <Link href="/index">
          <>
            <a>Home</a>

          </>
        </Link>

      </li>
      <li className="dropdown">
        <Link href="/causes">
          <>
            <a>Poojas</a>

          </>
        </Link>

      </li>
      <li className="dropdown">
        <Link href="/">
          <>
            <a>Festivals</a>

          </>
        </Link>

      </li>
      <li className="dropdown">
        <Link href="/news">
          <>
            <a>KCO</a>

          </>
        </Link>

      </li>
      <li className="dropdown">
        <Link href="#">
          <>
            <a>Aranery</a>

          </>
        </Link>

      </li>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
      <li className="search-btn search-toggler">
        <span>
          <i className="azino-icon-magnifying-glass"></i>
        </span>
      </li>
    </ul>
  );
};

export default NavLinks;
