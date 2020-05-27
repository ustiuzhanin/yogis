import React from "react"

import PropTypes from "prop-types"

import { ReactComponent as LocalsFavorite } from "../../../icons/locals-favorite.svg"

const MenuSectionCaption = (props) => {
  const { title, onCaptionClick } = props
  return (
    <li className="menu-section__category-item">
      <a
        id={title}
        className="menu-section__category-link"
        href="/"
        onClick={(e) => {
          return onCaptionClick(e)
        }}
      >
        <LocalsFavorite className="menu-section__category-img" />
        {title}
      </a>
    </li>
  )
}

MenuSectionCaption.propTypes = {
  title: PropTypes.string.isRequired,
  onCaptionClick: PropTypes.func.isRequired,
}

export default MenuSectionCaption
