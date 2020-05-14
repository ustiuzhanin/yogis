import React from "react"
import Header from "../header/header"
import WelcomeScreen from "../welcome-screen/welcome-screen"
import WhyUs from "../why-us/why-us"

import Advantages from "../advantages/advantages"

const Home = () => {
  return (
    <section>
      <Header />
      <main>
        <WelcomeScreen />
        <WhyUs />
        <Advantages />
      </main>
    </section>
  )
}

export default Home
