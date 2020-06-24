import React from "react"

import PropTypes from "prop-types"

import { ReactComponent as Breakfast } from "../../../icons/breakfast.svg"
import { ReactComponent as Sandwich } from "../../../icons/sandwich.svg"
import { ReactComponent as Burger } from "../../../icons/burger.svg"
import { ReactComponent as Salad } from "../../../icons/salad.svg"
import { ReactComponent as Crepe } from "../../../icons/crepe.svg"
import { ReactComponent as Waffle } from "../../../icons/waffle.svg"
import { ReactComponent as Soup } from "../../../icons/soup.svg"
import { ReactComponent as Appetizers } from "../../../icons/fries.svg"
import { ReactComponent as Kids } from "../../../icons/kids.svg"

const MenuSectionCaption = (props) => {
  const { title, onCaptionClick, isActive } = props

  const getIcon = (name) => {
    switch (name) {
      case "breakfast":
        return <Breakfast className="menu-section__category-img" />
      case "sandwiches":
        return <Sandwich className="menu-section__category-img" />
      case "burgers":
        return <Burger className="menu-section__category-img" />
      case "waffles":
        return <Waffle className="menu-section__category-img" />
      case "crepes":
        return <Crepe className="menu-section__category-img" />
      case "soups":
        return <Soup className="menu-section__category-img" />
      case "salads":
        return <Salad className="menu-section__category-img" />
      case "appetizers":
        return <Appetizers className="menu-section__category-img" />
      case "kids":
        return <Kids className="menu-section__category-img" />
      default:
        return null
    }
  }

  return (
    <li
      className={`menu-section__category-item ${
        isActive && "menu-section__category-item--active"
      }`}
    >
      <a
        id={title}
        className="menu-section__category-link"
        href="/"
        onClick={(e) => {
          return onCaptionClick(e)
        }}
      >
        {getIcon(title)}
        {/* <LocalsFavorite className="menu-section__category-img" /> */}
        {title}
      </a>
    </li>
  )
}

MenuSectionCaption.propTypes = {
  title: PropTypes.string.isRequired,
  onCaptionClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
}

export default MenuSectionCaption
