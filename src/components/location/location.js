import React from "react"

const Location = () => {
  return (
    <section id="location" className="location wrapper">
      <h2 className="location__header">
        Our <span className="highlight-color">Location</span>
      </h2>
      <div className="location__wrapper">
        <div className="location__contact-wrapper">
          <h3 className="location__name-header">
            <span className="highlight-color">Yogi`s</span> Waffles and Grill
          </h3>
          <p className="location__address">
            27 N Canyon St, <br /> West Yellowstone, MT
            <br /> 59758
          </p>
          <p className="location__hours">
            7 days a week <br />
            11 am — 8 pm
          </p>
          <a
            href="https://order.menudrive.com/yogiswafflesandgrill"
            className="location__btn btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order yummy now!
          </a>
        </div>
        <div className="map">
          <div className="map__wrapper">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2837.919066906999!2d-111.10159488446929!3d44.66000517909959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5351b9154aff2761%3A0x7e3f4a5d7114d8f7!2sYogi&#39;s%20Waffles%20%26%20Grill!5e0!3m2!1sen!2sus!4v1589764607839!5m2!1sen!2sus"
              width="600"
              height="500"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
            />
          </div>{" "}
        </div>
      </div>
    </section>
  )
}

export default Location
