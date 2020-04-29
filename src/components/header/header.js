import React, { useState } from "react"

import logo from "../../icons/logo.png"
import { ReactComponent as Truck } from "../../icons/truck.svg"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="header__wrapper wrapper">
        <div className="header__img-wrapper">
          <img
            className="header__img"
            src={logo}
            alt=""
            width="104"
            height="104"
          />
        </div>

        <nav className="header__nav">
          <button
            onClick={toggleIsMenuOpen}
            className="header__burger-btn"
            type="button"
          >
            <span className="header__burger-line" />
            <span className="header__burger-line" />
            <span className="header__burger-line" />
          </button>
          <ul
            className={`header__list ${
              isMenuOpen ? "header__list--open" : null
            }`}
          >
            <li className="header__item">
              <a className="header__link" href="/">
                Home
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="/">
                Why Us?
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="/">
                Menu
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="/">
                Contact Us
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="/">
                Location
              </a>
            </li>
          </ul>
        </nav>
        <a href="/" className="header__btn">
          <Truck className="header__icon" />
          Delivery
        </a>
      </div>
    </header>
  )
}

export default Header
