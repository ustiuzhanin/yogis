import React from "react"
import Header from "../header/header"
import WelcomeScreen from "../welcome-screen/welcome-screen"

const Home = () => {
  return (
    <section>
      <Header />
      <main>
        <WelcomeScreen />
      </main>
    </section>
  )
}

export default Home
