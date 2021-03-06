import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const SecFour = () => {
  return (
    <div>
      <div className="card bg-nmr-blue">
        <div className="sec">
          <h1 className="cardTitle">About Us</h1>
          <h2 className="subTitle">“A different kind of charity” </h2>
          <p className="content">
            Tenfinite is an effort to build our community modern campuses that
            integrate existing nonprofit organizations with facilities and
            programs to lift up, strengthen, and unite Americans with special
            situations with those fighting issues here in the U.S.
          </p>
        </div>
        <div className=" ">
          <StaticImage
            src="../images/pic1.png"
            width={600}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Picture one"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
      </div>

      <div className="card">
        <div className="">
          {" "}
          <StaticImage
            src="../images/donate.png"
            width={600}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Picture one"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <div className="sec">
          <h1 className="cardTitle">How it works?</h1>
          {/* <h2 className="subTitle">“The mutual funds of charities” </h2> */}
          <p className="content">
            Tenfinite acts as the mutual fund for donations of any size, giving
            the donor the benefit of supporting multiple endeavors with a single
            payment. If 10% of Americans give $10, Tenfinite can build 10
            campuses across the US.
          </p>
        </div>
      </div>
      <div className="card bg-nmr-blue">
        <div className="sec">
          <h1 className="cardTitle">The campus</h1>
          <h2 className="subTitle">“A different kind of charity” </h2>
          <p className="content">
            The campus will combine adaptive sports facilities with traditional
            ones alongside offices for existing nonprofits to pursue their
            missions. The campus will host fundraising events, nonprofit
            programs, and collaboration amongst various efforts.
          </p>
        </div>
        <div className="">
          {" "}
          <StaticImage
            src="../images/building.png"
            width={600}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Picture one"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
      </div>
    </div>
  )
}

export default SecFour
