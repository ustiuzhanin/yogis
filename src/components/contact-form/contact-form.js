import React from "react"

const ContactForm = () => {
  return (
    <section className="contact-form wrapper">
      <h2 className="contact-form__header">
        <span className="highlight-color">Contact</span> Us
      </h2>
      <p className="contact-form__desc">We’d love to chat</p>
      <form className="contact-form__form">
        <input
          className="contact-form__input contact-form__input-name"
          type="text"
          placeholder="Your Name (Required)"
        />
        <input
          className="contact-form__input contact-form__input-email"
          type="email"
          placeholder="Your Email (Required)"
        />
        <textarea
          className="contact-form__input contact-form__textarea"
          type="message"
          placeholder="Your Message"
        />
        <button className="contact-form__btn btn" type="submit">
          Send message
        </button>
      </form>
    </section>
  )
}

export default ContactForm
