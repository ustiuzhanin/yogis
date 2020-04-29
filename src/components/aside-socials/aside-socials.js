import React from "react"

import { ReactComponent as InstagramSvg } from "../../icons/instagram.svg"
import { ReactComponent as FacebookSvg } from "../../icons/facebook.svg"
import { ReactComponent as YelpSvg } from "../../icons/yelp.svg"
import { ReactComponent as TripadvisorSvg } from "../../icons/tripadvisor.svg"

const AsideSocials = () => {
  return (
    <div className="aside-socials">
      <p className="aside-socials__text">Follow Us —</p>
      <ul className="aside-socials__list">
        <li className="aside-socials__item">
          <a
            href="/"
            className="aside-socials__link"
            aria-label="Read more about Seminole tax hike"
          >
            <span className="visually-hidden">Tripadvisor</span>
            <TripadvisorSvg
              className="aside-socials__icon"
              width="30px"
              height="30px"
            />
          </a>
        </li>

        <li className="aside-socials__item">
          <a
            href="/"
            className="aside-socials__link"
            aria-label="Read more about Seminole tax hike"
          >
            <span className="visually-hidden">Yelp</span>
            <YelpSvg
              className="aside-socials__icon"
              width="30px"
              height="30px"
            />
          </a>
        </li>

        <li className="aside-socials__item">
          <a
            href="/"
            className="aside-socials__link"
            aria-label="Read more about Seminole tax hike"
          >
            <span className="visually-hidden">Facebook</span>
            <FacebookSvg
              className="aside-socials__icon"
              width="30px"
              height="30px"
            />
          </a>
        </li>

        <li className="aside-socials__item">
          <a
            href="/"
            className="aside-socials__link"
            aria-label="Read more about Seminole tax hike"
          >
            <span className="visually-hidden">Instagram</span>
            <InstagramSvg
              className="aside-socials__icon"
              width="30px"
              height="30px"
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default AsideSocials
