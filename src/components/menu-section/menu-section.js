import React, { useState } from "react"

import MenuSectionItem from "./menu-section-item/menu-section-item"
import MenuSectionCaption from "./menu-section-caption/menu-section-caption"
import { ReactComponent as Swipe } from "../../icons/swipe.svg"

const menuData = {
  breakfast: [
    {
      name: "Breakfast plate",
      desc: "bacon or ham, 2 eggs, sourdough toast, tatet tots",
      price: "9.95",
    },
    {
      name: "Breakfast Crepe",
      desc: "bacon or ham, 2 eggs & cheddar cheese",
      price: "10.95",
    },
    {
      name: "Breakfast Sandwich",
      desc: "sourdough bread, bacon or ham, 2eggs & cheddar cheese",
      price: "7.95",
    },
    {
      name: "Breakfast Waffle",
      desc: "bacon or ham, 2 eggs & cheddar cheese",
      price: "10.95",
    },
    {
      name: "Pesto Tomato Egg Sandwich",
      desc: "sourdough bread, 2 eggs, mozzarella, tomatoes & pesto",
      price: "7.95",
    },
    {
      name: "Plain Crepe",
      desc: "sugar powder & maple syrop",
      price: "7.95",
    },
    {
      name: "Plain Waffle",
      desc: "sugar powder & maple syrop",
      price: "7.95",
    },
    {
      name: "Oatmeal",
      desc: "",
      price: "10.95",
    },
    {
      name: "Peanut Butter & Jam Crepe",
      desc: "",
      price: "9.95",
    },
    {
      name: "Peanut Butter & Jam Sandwich",
      desc: "",
      price: "7.95",
    },
    {
      name: "Peanut Butter & Jam Waffle",
      desc: "",
      price: "9.95",
    },
  ],
  sandwiches: [
    {
      name: "Breakfast Sandwich",
      desc: "white bread, bacon, egg & cheddar cheese",
      price: "9.95",
    },
    {
      name: "BLT",
      desc: "white bread, bacon, lettuce, tomatoes & mayo",
      price: "9.95",
    },
    {
      name: "Chicken Sandwich",
      desc: "white bread, grilled chicken, lettuce, tomatoes, pickles & mayo",
      price: "10.95",
    },
    {
      name: "Viggie Sandwich",
      desc:
        "whole wheat, mushrooms, swiss cheese, green beans, jalapenos, lettuce, tomatoes, onions, pickles & 1000 island",
      price: "10.95",
    },
    {
      name: "Reuben",
      desc: "rye bread, corned beef, sauerkraut, swiss cheese & 1000 island",
      price: "10.95",
    },
    {
      name: "Grilled Cheese",
      desc: "white bread, swiss & cheddar cheese",
      price: "8.95",
    },
    {
      name: "Fish Sandwich",
      desc: "white bread, fish fillet & tartar sauce",
      price: "10.95",
    },
    {
      name: "Hungry Yogi",
      desc:
        "whole wheat, roast beef, ham, turkey & bacon, lettuce, tomatoes, pickles, onions, jalapenos, cheddar cheese & mayo",
      price: "16.95",
    },
    {
      name: "Philly Cheesesteak",
      desc:
        "white bread, roast beef, grilled onions, mushrooms, jalapenos & pepper jack",
      price: "11.95",
    },
    {
      name: "Turkey Club",
      desc: "white bread, turkey & bacon, lettuce, tomatoes, onions & mayo",
      price: "11.95",
    },
    {
      name: "Pesto Tomato Egg Sandwich",
      desc: "sourdough bread, 2 eggs, mozzarella, tomatoes & pesto",
      price: "8.95",
    },
    {
      name: "Corned Beef Grilled Cheese Sandwich",
      desc:
        "whole wheat bread, corned beef, swiss cheese, lettuce, pickles & mustard",
      price: "10.95",
    },
    {
      name: "Turkey Bacon Blue Cheese Sandwich",
      desc: "sourdough bread, turkey, bacon & blue cheese",
      price: "11.95",
    },
  ],
  burgers: [
    {
      name: "Yogi's Burger",
      desc: "egg, ham & cheddar cheese",
      price: "12.95",
    },
    {
      name: "Hamburger",
      desc: "",
      price: "9.95",
    },
    {
      name: "Mushroom & Swiss Burger",
      desc: "",
      price: "11.95",
    },
    {
      name: "BBQ Bacon Burger",
      desc: "",
      price: "11.95",
    },
    {
      name: "Cheeseburger",
      desc: "",
      price: "10.95",
    },
    {
      name: "Old Faithful",
      desc:
        "rye bread, chopped tomatoes, grilled onions, jalapenos, mushrooms & swiss cheese",
      price: "12.95",
    },
    {
      name: "Jalapeno Jack",
      desc: "jalapenos & pepper jack",
      price: "11.95",
    },
    {
      name: "Blue Cheese Burger",
      desc: "",
      price: "11.95",
    },
    {
      name: "Bacon Cheeseburger",
      desc: "",
      price: "12.95",
    },
    {
      name: "BBQ Bacon Cheeseburger",
      desc: "",
      price: "12.95",
    },
  ],
  waffles: [
    {
      name: "Classic Chicken & Waffles",
      desc: "",
      price: "10.95",
    },
    {
      name: "Chicken & Mushrooms",
      desc: "chicken, mushrooms & cheese",
      price: "10.95",
    },
    {
      name: "Breakfast Waffle",
      desc: "bacon, egg & cheddar cheese",
      price: "10.95",
    },
    {
      name: "Ham & Cheese Waffle",
      desc: "ham, green beans & cheese",
      price: "10.95",
    },
    {
      name: "Margarite Waffle",
      desc: "tomatoes, cheese & pesto",
      price: "10.95",
    },
    {
      name: "Turkey & Mushroom Waffle",
      desc: "turkey, mushrooms & cheese",
      price: "10.95",
    },
    {
      name: "Plain Waffle",
      desc: "sugar powder & maple syrup",
      price: "7.95",
    },
    {
      name: "Peanut Butter & Jam Waffle",
      desc: "",
      price: "9.95",
    },
    {
      name: "Yogi's Waffle",
      desc:
        "bananas, black & white chocolate, pecans, whipped cream & vanilla ice cream",
      price: "10.95",
    },
    {
      name: "Strawberry & Nutella Waffle",
      desc: "strawberry jam, nutella, whipped cream & vanilla ice cream",
      price: "10.95",
    },
    {
      name: "Peach & Carmel Waffle",
      desc:
        "peach jam, caramel sauce, cinnamon, whipped cream & vanilla ice cream",
      price: "10.95",
    },
    {
      name: "Pineapple & Mango Waffle",
      desc: "pineapple, mango, honey, whipped cream & vanilla ice cream",
      price: "10.95",
    },
    {
      name: "Blueberry & Almonds Waffle",
      desc: "blueberry jam, almonds, whipped cream & vanilla ice cream",
      price: "10.95",
    },
    {
      name: "Yellowstone Waffle",
      desc: "huckleberry jam, walnuts, whipped cream & vanilla ice cream",
      price: "10.95",
    },
    {
      name: "Banana & Nutella Waffle",
      desc: "banana, nutella, whipped cream & vanilla ice cream",
      price: "10.95",
    },
    {
      name: "BLT Waffle",
      desc: "bacon, lettuce, tomatoes & mayo",
      price: "10.95",
    },
    {
      name: "Ham Egg & Cheese Waffle",
      desc: "",
      price: "10.95",
    },
    {
      name: "Honey Lemon Waffle",
      desc: "lemon, honey, powder sugar, whipped cream & vanilla ice cream",
      price: "10.95",
    },
  ],
  crepes: [
    {
      name: "Chicken & Mushroom Crepe",
      desc: "chicken, mushrooms & cheese",
      price: "10.95",
    },
    {
      name: "Breakfast Crepe",
      desc: "bacon, egg & cheddar cheese",
      price: "10.95",
    },
    {
      name: "Ham & Cheese Crepe",
      desc: "ham, green beans & cheese",
      price: "10.95",
    },
    {
      name: "Margarite Crepe",
      desc: "tomatoes, cheese & pesto",
      price: "10.95",
    },
    {
      name: "Turkey & Mushroom Crepe",
      desc: "turkey, mushrooms & cheese",
      price: "10.95",
    },
    {
      name: "Plain Crepe",
      desc: "sugar powder & maple syrup",
      price: "7.95",
    },
    {
      name: "Peanut Butter & Jam Crepe",
      desc: "",
      price: "9.95",
    },
    {
      name: "Yogi's Crepe",
      desc:
        "bananas, black & white chocolate, pecans, whipped cream & vanilla ice cream",
      price: "10.95",
    },
    {
      name: "Strawberry & Nutella Crepe",
      desc: "strawberry jam, nutella, whipped cream & vanilla ice cream",
      price: "10.95",
    },
    {
      name: "Peach & Carmel Crepe",
      desc:
        "peach jam, caramel sauce, cinnamon, whipped cream & vanilla ice cream",
      price: "10.95",
    },
    {
      name: "Pineapple & Mango Crepe",
      desc: "pineapple, mango, honey, whipped cream & vanilla ice cream",
      price: "10.95",
    },
    {
      name: "Blueberry & Almonds Crepe",
      desc: "blueberry jam, almonds, whipped cream & vanilla ice cream",
      price: "10.95",
    },
    {
      name: "Yellowstone Crepe",
      desc: "huckleberry jam, walnuts, whipped cream & vanilla ice cream",
      price: "10.95",
    },
    {
      name: "Banana & Nutella Crepe",
      desc: "banana, nutella, whipped cream & vanilla ice cream",
      price: "10.95",
    },
    {
      name: "BLT Crepe",
      desc: "bacon, lettuce, tomatoes & mayo",
      price: "10.95",
    },
    {
      name: "Ham Egg & Cheese Crepe",
      desc: "",
      price: "10.95",
    },
    {
      name: "Honey Lemon Crepe",
      desc: "lemon, honey, powder sugar, whipped cream & vanilla ice cream",
      price: "10.95",
    },
  ],
  soups: [
    {
      name: "Cup",
      desc: "",
      price: "4.95",
    },
    {
      name: "Bowl",
      desc: "",
      price: "6.95",
    },
  ],
  salads: [
    {
      name: "Yogi's Salad",
      desc: "salad mix, tomatoes, onions, cheese, croutons & grilled chicken",
      price: "10.95",
    },
    {
      name: "House Salad",
      desc: "salad mix, tomatoes, onions, cheese & croutons",
      price: "4.95",
    },
    {
      name: "Bacon Blue Cheese Salad",
      desc:
        "salad mix, tomatoes, onions, croutons, bacon & blue cheese crumbles",
      price: "10.95",
    },
  ],
  kids: [
    {
      name: "KIDS Hamburger & Fires",
      desc: "",
      price: "6.95",
    },
    {
      name: "KIDS Cheeseburger & Fries",
      desc: "",
      price: "7.95",
    },
    {
      name: "KIDS Grilled Cheese & Fries",
      desc: "",
      price: "5.95",
    },
  ],
  appetizers: [
    {
      name: "French Fries",
      desc: "",
      price: "4.95 / 6.95",
    },
    {
      name: "Onion Rings",
      desc: "",
      price: "6.95",
    },
    {
      name: "Tater Tots",
      desc: "",
      price: "6.95",
    },
    {
      name: "Chicken Strips",
      desc: "2 pc chicken & french fries",
      price: "7.95",
    },
    {
      name: "Fish & Chips",
      desc: "2 pc fish fillet & french fries",
      price: "9.95",
    },
    {
      name: "Loaded Fries",
      desc: "",
      price: "9.95",
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
              isActive={menuActive === title}
              onCaptionClick={onMenuCategoryClick}
            />
          ))}
        </ul>

        <span className="menu-section__swipe">
          Swipe for more! <Swipe />
        </span>

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
      <a
        href="https://order.menudrive.com/yogiswafflesandgrill"
        className="menu-section__btn btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Order Yummy Now!
      </a>
    </section>
  )
}

export default MenuSection
