import React from "react"

import { StaticImage } from "gatsby-plugin-image"

const SecThree = () => {
  return (
    <div>
      <div>
        <div className="donateBlock">
          <div className="content2">
            <h1 className="title">Make a Difference Today!</h1>
            <p className="text-white pb-5 sm:pr-20">
              In sint ex nostrud amet ullamco adipisicing adipisicing et duis
              cillum irure.
              <br /> Quis non ad dolore ex eu id excepteur adipisicing
              adipisicing excepteur.
            </p>
            <div className="flex sm:flex-row flex-col gap-4">
              <button className="btn">Donate Now</button>
              <button className="btn2">Learn More</button>
            </div>
          </div>

          <StaticImage
            src="../images/vet.png"
            //   width={600}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Picture one"
            // style={{ marginBottom: `1.45rem` }}
          />
        </div>
      </div>
    </div>
  )
}

export default SecThree
