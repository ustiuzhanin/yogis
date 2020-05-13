import React from "react"

import AsideSocials from "../aside-socials/aside-socials"

import homePlate from "../../images/home-plate.png"

const WelcomeScreen = () => {
  return (
    <section className="welcome-screen">
      <div className="welcome-screen__wrapper wrapper">
        <AsideSocials />

        <div className="welcome-screen__catcher">
          <div className="welcome-screen__text-wrapper">
            <h1 className="welcome-screen__header">
              Welcome to <span className="highlight-color">Yogi`s</span> <br />
              <span className="welcome-screen__descr">Waffles and Grill</span>
            </h1>
            <p className="welcome-screen__text">
              We are the best quality and traditional restaurant in West
              Yellowstone.
            </p>
            <a href="/" className="welcome-screen__btn btn">
              Order Yummy Now!
            </a>
          </div>

          <img className="welcome-screen__img" src={homePlate} alt="" />
        </div>
      </div>
    </section>
  )
}

export default WelcomeScreen
