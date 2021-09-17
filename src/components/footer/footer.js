import React from "react"
import Socials from "../socials/socials"
import Menu from "../menu/menu"

import logo from "../../icons/logo.png"
import { ReactComponent as PhoneSvg } from "../../icons/phone.svg"
import { ReactComponent as MailSvg } from "../../icons/email.svg"
import { ReactComponent as LocationSvg } from "../../icons/marker.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper wrapper">
        <div className="footer__social-wrapper">
          <div className="footer__img-wrapper">
            <img
              className="footer__img"
              src={logo}
              alt=""
              width="104"
              height="104"
            />
          </div>
          <Socials type="footer" />
        </div>
        <div className="footer__menu-wrapper">
          <h3 className="footer__header">Quick link</h3>
          <Menu type="footer" />
        </div>
        <div className="footer__contact-wrapper">
          <h3 className="footer__header">Contact Us</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <a className="footer__link footer__phone" href="tel:14065398168">
                <PhoneSvg className="footer__icon" />
                +1 406 539 81 68
              </a>
            </li>
            <li className="footer__item">
              <a
                className="footer__link"
                href="mailto:yogiswafflesandgrill@gmail.com"
              >
                <MailSvg className="footer__icon" />
                yogiswafflesandgrill@gmail.com
              </a>
            </li>
            <li className="footer__item">
              <LocationSvg className="footer__icon" />
              27 N Canyon St, <br /> West Yellowstone, MT <br /> 59758-9545
            </li>
          </ul>
        </div>
      </div>
      <p className="footer__rights">
        © Yogi's Waffles & Grill 2020. <br /> All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
