import React from "react"

import PropTypes from "prop-types"

const Menu = (props) => {
  const { isMenuOpen, type } = props
  return (
    <ul
      className={`menu menu__list--${type} ${
        isMenuOpen ? "menu__list--open" : null
      }`}
    >
      <li className={`menu__item menu__item--${type}`}>
        <a className={`menu__link menu__link--${type}`} href="/">
          Home
        </a>
      </li>
      <li className={`menu__item menu__item--${type}`}>
        <a className={`menu__link menu__link--${type}`} href="/">
          Why Us?
        </a>
      </li>
      <li className={`menu__item menu__item--${type}`}>
        <a className={`menu__link menu__link--${type}`} href="/">
          Menu
        </a>
      </li>
      <li className={`menu__item menu__item--${type}`}>
        <a className={`menu__link menu__link--${type}`} href="/">
          Contact Us
        </a>
      </li>
      <li className={`menu__item menu__item--${type}`}>
        <a className={`menu__link menu__link--${type}`} href="/">
          Location
        </a>
      </li>
    </ul>
  )
}

Menu.propTypes = {
  type: PropTypes.string.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
}

export default Menu
