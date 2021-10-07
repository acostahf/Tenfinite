import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const data = [
  {
    title: "title",
    content:
      "Est officia eu deserunt ullamco cupidatat. Ex excepteur ut adipisicing veniam sit. Nulla exercitation culpa minim quis Lorem est consequat ad Lorem sunt. Proident incididunt id laborum quis aute quis consequat nostrud occaecat. Eiusmod ad pariatur fugiat esse tempor. Magna laboris nisi fugiat ullamco voluptate veniam tempor sunt adipisicing tempor dolore velit.",
  },
  {
    title: "title",
    content:
      "Est officia eu deserunt ullamco cupidatat. Ex excepteur ut adipisicing veniam sit. Nulla exercitation culpa minim quis Lorem est consequat ad Lorem sunt. Proident incididunt id laborum quis aute quis consequat nostrud occaecat. Eiusmod ad pariatur fugiat esse tempor. Magna laboris nisi fugiat ullamco voluptate veniam tempor sunt adipisicing tempor dolore velit.",
  },
  {
    title: "title",
    content:
      "Est officia eu deserunt ullamco cupidatat. Ex excepteur ut adipisicing veniam sit. Nulla exercitation culpa minim quis Lorem est consequat ad Lorem sunt. Proident incididunt id laborum quis aute quis consequat nostrud occaecat. Eiusmod ad pariatur fugiat esse tempor. Magna laboris nisi fugiat ullamco voluptate veniam tempor sunt adipisicing tempor dolore velit.",
  },
  {
    title: "title",
    content:
      "Est officia eu deserunt ullamco cupidatat. Ex excepteur ut adipisicing veniam sit. Nulla exercitation culpa minim quis Lorem est consequat ad Lorem sunt. Proident incididunt id laborum quis aute quis consequat nostrud occaecat. Eiusmod ad pariatur fugiat esse tempor. Magna laboris nisi fugiat ullamco voluptate veniam tempor sunt adipisicing tempor dolore velit.",
  },
]

export default function card() {
  return (
    <div className=" flex flex-col w-96 shadow-lg rounded-lg p-10">
      {/* {data.map(content => ( */}
      <div>
        <div className="flex gap-2">
          <div className="bg-red-500 rounded-full w-8 flex justify-center items-center p-2">
            <StaticImage
              src="../images/icon1.png"
              //   width={600}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Picture one"
              // style={{ marginBottom: `1.45rem` }}
            />
          </div>
          <h1 className="text-inline">Title Here</h1>
        </div>
        <div>
          <p>
            Incididunt anim enim eu qui adipisicing. Cupidatat occaecat cillum
            magna voluptate non ad aliquip nulla deserunt adipisicing. Pariatur
            pariatur mollit cillum tempor id aliqua occaecat ipsum consequat
            officia culpa mollit anim irure.
          </p>
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
      {/* ))} */}
    </div>
  )
}
