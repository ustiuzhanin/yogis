import React from "react"

import PropTypes from "prop-types"

const MenuSectionItem = (props) => {
  const { name, price, desc } = props
  return (
    <li className="menu-section__dish-item">
      <b className="menu-section__dish-name">{name}</b>
      <span className="menu-section__dots" />
      <span className="menu-section__dish-price">{price}</span>
      <p className="menu-section__dish-desc">{desc}</p>
    </li>
  )
}

MenuSectionItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default MenuSectionItem
