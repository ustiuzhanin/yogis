import React from "react"

import Advantages from "../advantages/advantages"

import burgerImg from "../../images/burger.png"

const WhyUs = () => {
  return (
    <section id="why-us" className="why-us wrapper">
      <h2 className="why-us__header">
        Why should you <span className="highlight-color">try?</span>
      </h2>
      <p className="why-us__desc">Because,</p>
      <div className="why-us__wrapper">
        <img className="why-us__img" src={burgerImg} alt="" />
        <ul className="why-us__list">
          <li className="why-us__item">Quality ingredients</li>

          <li className="why-us__item"> Made to order</li>

          <li className="why-us__item">Healthy options</li>

          <li className="why-us__item">Fast delivery</li>
        </ul>
      </div>
      <Advantages />
    </section>
  )
}

export default WhyUs
