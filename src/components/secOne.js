import React from "react"
import Card from "./card"

import { StaticImage } from "gatsby-plugin-image"

const colOne = [
  {
    title: "Domestic Minor Sex Trafficking",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam morbi ellus sed. Sed vel neque, viverra pretium arcu. Amet, elementum, odio tincidunt massa urna, tellus. ",
    icon: "",
    number: "",
  },
  {
    title: "Child Hunger and School Lunch Assistance",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam morbi ellus sed. Sed vel neque, viverra pretium arcu. Amet, elementum, odio tincidunt massa urna, tellus. ",
    icon: "",
    number: "",
  },
  {
    title: "Child disability and disease",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam morbi ellus sed. Sed vel neque, viverra pretium arcu. Amet, elementum, odio tincidunt massa urna, tellus. ",
    icon: "",
    number: "",
  },
]
const colTwo = [
  {
    title: "Child safety ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam morbi ellus sed. Sed vel neque, viverra pretium arcu. Amet, elementum, odio tincidunt massa urna, tellus. ",
    icon: "",
    number: "",
  },
  {
    title: "Foster support and Programming",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam morbi ellus sed. Sed vel neque, viverra pretium arcu. Amet, elementum, odio tincidunt massa urna, tellus. ",
    icon: "",
    number: "",
  },
  {
    title: "Adaptive sports",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam morbi ellus sed. Sed vel neque, viverra pretium arcu. Amet, elementum, odio tincidunt massa urna, tellus. ",
    icon: "",
    number: "",
  },
  {
    title: "Mental health",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam morbi ellus sed. Sed vel neque, viverra pretium arcu. Amet, elementum, odio tincidunt massa urna, tellus. ",
    icon: "",
    number: "",
  },
]
const colThree = [
  {
    title: "Military and Military families Support",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam morbi ellus sed. Sed vel neque, viverra pretium arcu. Amet, elementum, odio tincidunt massa urna, tellus. ",
    icon: "",
    number: "",
  },
  {
    title: "Regional Training Center for underfunded Olympic Athletes",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam morbi ellus sed. Sed vel neque, viverra pretium arcu. Amet, elementum, odio tincidunt massa urna, tellus. ",
    icon: "",
    number: "",
  },
  {
    title: "Education Equality",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam morbi ellus sed. Sed vel neque, viverra pretium arcu. Amet, elementum, odio tincidunt massa urna, tellus. ",
    icon: "",
    number: "",
  },
]

const SecOne = () => {
  return (
    <div className=" bg-nmr-blue px-20 py-20">
      <div className="flex items-center flex-col pb-10">
        <h4 className="text-xl font-bold text-red-500">What we do</h4>
        <h1 className="text-4xl font-semibold text-nmr-txBlue">
          Tenfinite Points
        </h1>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-5">
        <div>
          {colOne.map(content => (
            <div className=" flex flex-col  shadow-lg rounded-lg p-10">
              <div>
                <div className="flex gap-2 pb-5">
                  <div className="bg-red-500 rounded-full w-8 h-8 flex justify-center items-center p-2">
                    <StaticImage
                      src="../images/icon1.png"
                      //   width={600}
                      quality={95}
                      formats={["auto", "webp", "avif"]}
                      alt="Picture one"
                      // style={{ marginBottom: `1.45rem` }}
                    />
                  </div>
                  <h1 className="text-inline">{content.title}</h1>
                </div>
                <div className="pb-5">
                  <p>{content.content}</p>
                </div>
                <div className="flex justify-end">
                  <StaticImage
                    src="../images/one.png"
                    //   width={600}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="Picture one"
                    style={{ marginBottom: `1.45rem` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:pt-10">
          <div>
            {colTwo.map(content => (
              <div className=" flex flex-col  shadow-lg rounded-lg p-10">
                <div>
                  <div className="flex gap-2 pb-5">
                    <div className="bg-red-500 rounded-full w-8 h-8 flex justify-center items-center p-2">
                      <StaticImage
                        src="../images/icon1.png"
                        //   width={600}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="Picture one"
                        // style={{ marginBottom: `1.45rem` }}
                      />
                    </div>
                    <h1 className="text-inline">{content.title}</h1>
                  </div>
                  <div className="pb-5">
                    <p>{content.content}</p>
                  </div>
                  <div className="flex justify-end">
                    <StaticImage
                      src="../images/one.png"
                      //   width={600}
                      quality={95}
                      formats={["auto", "webp", "avif"]}
                      alt="Picture one"
                      style={{ marginBottom: `1.45rem` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div>
            {colThree.map(content => (
              <div className=" flex flex-col  shadow-lg rounded-lg p-10">
                <div>
                  <div className="flex gap-2 pb-5">
                    <div className="bg-red-500 rounded-full w-8 h-8 flex justify-center items-center p-2">
                      <StaticImage
                        src="../images/icon1.png"
                        //   width={600}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="Picture one"
                        // style={{ marginBottom: `1.45rem` }}
                      />
                    </div>
                    <h1 className="text-inline">{content.title}</h1>
                  </div>
                  <div className="pb-5">
                    <p>{content.content}</p>
                  </div>
                  <div className="flex justify-end">
                    <StaticImage
                      src="../images/one.png"
                      //   width={600}
                      quality={95}
                      formats={["auto", "webp", "avif"]}
                      alt="Picture one"
                      style={{ marginBottom: `1.45rem` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecOne
