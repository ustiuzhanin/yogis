import React, { useState, useRef, useEffect } from "react"
import Menu from "../menu/menu"

import logo from "../../icons/logo.png"
// import { ReactComponent as Truck } from "../../icons/truck.svg"
import { ReactComponent as MenuSvg } from "../../icons/order.svg"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [headerHeigth, setHeaderHigth] = useState(0)
  const header = useRef(null)

  useEffect(() => {
    setHeaderHigth(header.current.clientHeight)
  }, [])

  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header" ref={header}>
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
            className={`header__burger-btn ${
              isMenuOpen ? "header__burger-btn--close" : null
            }`}
            type="button"
          >
            <span className="header__burger-line" />
            <span className="header__burger-line" />
            <span className="header__burger-line" />
            <span className="header__burger-line" />
          </button>

          <Menu
            isMenuOpen={isMenuOpen}
            type="header"
            closeMenu={toggleIsMenuOpen}
            headerHeigth={headerHeigth}
          />
        </nav>

        {/* <a
          href="https://order.menudrive.com/yogiswafflesandgrill"
          className="header__btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Truck className="header__icon" />
          Delivery
        </a> */}
        <a
          href="https://order.menudrive.com/yogiswafflesandgrill"
          className="header__btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Truck className="header__icon" /> */}
          <MenuSvg className="header__icon" />
          Order Now!
        </a>
      </div>
    </header>
  )
}

export default Header
