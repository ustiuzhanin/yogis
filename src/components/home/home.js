import React from "react"
import Header from "../header/header"
import WelcomeScreen from "../welcome-screen/welcome-screen"
import WhyUs from "../why-us/why-us"
import Advantages from "../advantages/advantages"
import MenuSection from "../menu-section/menu-section"
import ContactForm from "../contact-form/contact-form"

const Home = () => {
  return (
    <section>
      <Header />
      <main>
        <WelcomeScreen />
        <WhyUs />
        <Advantages />
        <MenuSection />
        <ContactForm />
      </main>
    </section>
  )
}

export default Home
