import React from "react"

import PropTypes from "prop-types"

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
          href="https://www.tripadvisor.com/Restaurant_Review-g45399-d15696430-Reviews-Yogi_s_Waffles_Grill-West_Yellowstone_Montana.html"
          className={`socials__link socials__link--${type}`}
          target="_blank"
          rel="noopener noreferrer"
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
          href="https://www.yelp.com/biz/yogis-waffles-and-grill-west-yellowstone-2"
          className={`socials__link socials__link--${type}`}
          aria-label="Read more about Seminole tax hike"
          target="_blank"
          rel="noopener noreferrer"
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
          href="https://www.facebook.com/YogisWyellowstone"
          className={`socials__link socials__link--${type}`}
          aria-label="Read more about Seminole tax hike"
          target="_blank"
          rel="noopener noreferrer"
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
          href="https://www.instagram.com/yogiswaffles/"
          className={`socials__link socials__link--${type}`}
          aria-label="Read more about Seminole tax hike"
          target="_blank"
          rel="noopener noreferrer"
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

Socials.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Socials
