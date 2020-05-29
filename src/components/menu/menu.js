import React from "react"

import { Link } from "react-scroll"

import PropTypes from "prop-types"

const Menu = (props) => {
  const { isMenuOpen, type, closeMenu, headerHeigth } = props

  const handleSetActive = () => {
    // console.log(props.header)
  }

  return (
    <ul
      className={`menu menu__list--${type} ${
        isMenuOpen && type === "header" && "menu__list--open"
      }`}
    >
      {/* <ul
      className={`menu menu__list--${type} ${
        isMenuOpen ? "menu__list--open" : null
      }`}
    > */}
      <li className={`menu__item menu__item--${type}`}>
        <Link
          className={`menu__link menu__link--${type}`}
          activeClass="menu__link--active"
          to="home"
          spy
          smooth
          offset={-headerHeigth}
          duration={500}
          onSetActive={handleSetActive}
          onClick={closeMenu}
        >
          Home
        </Link>
      </li>
      <li className={`menu__item menu__item--${type}`}>
        <Link
          className={`menu__link menu__link--${type}`}
          activeClass="menu__link--active"
          to="why-us"
          spy
          smooth
          offset={-headerHeigth}
          duration={500}
          onSetActive={handleSetActive}
          onClick={closeMenu}
        >
          Why Us?
        </Link>
      </li>
      <li className={`menu__item menu__item--${type}`}>
        <Link
          className={`menu__link menu__link--${type}`}
          activeClass="menu__link--active"
          to="menu"
          spy
          smooth
          offset={-headerHeigth}
          duration={500}
          onSetActive={handleSetActive}
          onClick={closeMenu}
        >
          Menu
        </Link>
      </li>
      <li className={`menu__item menu__item--${type}`}>
        <Link
          className={`menu__link menu__link--${type}`}
          activeClass="menu__link--active"
          to="contact"
          spy
          smooth
          offset={-headerHeigth}
          duration={500}
          onSetActive={handleSetActive}
          onClick={closeMenu}
        >
          Contact Us
        </Link>
      </li>
      <li className={`menu__item menu__item--${type}`}>
        <Link
          className={`menu__link menu__link--${type}`}
          activeClass="menu__link--active"
          to="location"
          spy
          smooth
          offset={-headerHeigth}
          duration={500}
          onSetActive={handleSetActive}
          onClick={closeMenu}
        >
          Location
        </Link>
      </li>
    </ul>
  )
}

Menu.defaultProps = {
  isMenuOpen: true,
  headerHeigth: 60,
  closeMenu: () => {},
}

Menu.propTypes = {
  type: PropTypes.string.isRequired,
  isMenuOpen: PropTypes.bool,
  closeMenu: PropTypes.func,
  headerHeigth: PropTypes.number,
}

export default Menu
