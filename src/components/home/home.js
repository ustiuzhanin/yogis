import React from "react"
import Header from "../header/header"
import WelcomeScreen from "../welcome-screen/welcome-screen"
import WhyUs from "../why-us/why-us"
import MenuSection from "../menu-section/menu-section"
import ContactForm from "../contact-form/contact-form"
import Location from "../location/location"
import Footer from "../footer/footer"

const Home = () => {
  return (
    <section>
      <Header />
      <main>
        <WelcomeScreen />
        <WhyUs />
        <MenuSection />
        <ContactForm />
        <Location />
      </main>
      <Footer />
    </section>
  )
}

export default Home
