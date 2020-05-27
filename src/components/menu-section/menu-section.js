import React, { useState } from "react"

import MenuSectionItem from "./menu-section-item/menu-section-item"
import MenuSectionCaption from "./menu-section-caption/menu-section-caption"

const menuData = {
  breakfast: [
    {
      name: "Breakfast plate",
      desc: "Bacon or Ham, 2 Eggs, Sourdough Toast, Tater Tots",
      price: "9.95",
    },
  ],
  sandwiches: [
    {
      name: "Snadwitch",
      desc: " Eggs, Sourdough Toast, Tater Tots",
      price: "3.3",
    },
  ],
  burgers: [
    {
      name: "burger",
      desc: "Bacon or Ham, 2 Eggs,",
      price: "19.95",
    },
  ],
}

const MenuSection = () => {
  const [menuActive, setMenuActive] = useState("breakfast")

  const onMenuCategoryClick = (evt) => {
    evt.preventDefault()
    setMenuActive(evt.currentTarget.id)
  }

  return (
    <section id="menu" className="menu-section wrapper">
      <h2 className="menu-section__header">
        Our <span className="highlight-color">Menu</span>
      </h2>

      <div className="menu-section__wrapper">
        <ul className="menu-section__category-list">
          {Object.keys(menuData).map((title) => (
            <MenuSectionCaption
              key={Math.random()}
              title={title}
              onCaptionClick={onMenuCategoryClick}
            />
          ))}
        </ul>
        <ul className="menu-section__dish-list">
          {menuData[menuActive].map((item) => (
            <MenuSectionItem
              key={Math.random()}
              name={item.name}
              price={item.price}
              desc={item.desc}
            />
          ))}
        </ul>
      </div>
      <a href="/" className="menu-section__btn btn">
        Order Yummy Now!
      </a>
    </section>
  )
}

export default MenuSection
