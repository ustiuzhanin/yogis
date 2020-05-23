import React from "react"

import { ReactComponent as InstagramSvg } from "../../icons/instagram.svg"
import { ReactComponent as FacebookSvg } from "../../icons/facebook.svg"
import { ReactComponent as YelpSvg } from "../../icons/yelp.svg"
import { ReactComponent as TripadvisorSvg } from "../../icons/tripadvisor.svg"

const Socials = (props) => {
  const { type } = props
  return (
    <ul className={`socials__list socials__list--${type}`}>
      <li className={`socials__item socials__item--${type}`}>
        <a
          href="/"
          className={`socials__link socials__link--${type}`}
          aria-label="Read more about Seminole tax hike"
        >
          <span className="visually-hidden">Tripadvisor</span>
          <TripadvisorSvg
            className={`socials__icon socials__icon--${type}`}
            width="30px"
            height="30px"
          />
        </a>
      </li>

      <li className={`socials__item socials__item--${type}`}>
        <a
          href="/"
          className={`socials__link socials__link--${type}`}
          aria-label="Read more about Seminole tax hike"
        >
          <span className="visually-hidden">Yelp</span>
          <YelpSvg
            className={`socials__icon socials__icon--${type}`}
            width="30px"
            height="30px"
          />
        </a>
      </li>

      <li className={`socials__item socials__item--${type}`}>
        <a
          href="/"
          className={`socials__link socials__link--${type}`}
          aria-label="Read more about Seminole tax hike"
        >
          <span className="visually-hidden">Facebook</span>
          <FacebookSvg
            className={`socials__icon socials__icon--${type}`}
            width="30px"
            height="30px"
          />
        </a>
      </li>

      <li className={`socials__item socials__item--${type}`}>
        <a
          href="/"
          className={`socials__link socials__link--${type}`}
          aria-label="Read more about Seminole tax hike"
        >
          <span className="visually-hidden">Instagram</span>
          <InstagramSvg
            className={`socials__icon socials__icon--${type}`}
            width="30px"
            height="30px"
          />
        </a>
      </li>
    </ul>
  )
}

export default Socials
