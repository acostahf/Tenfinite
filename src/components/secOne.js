import React from "react"
import Card from "./card"

const SecOne = () => {
  return (
    <div className=" bg-nmr-blue px-20">
      <h1>Section 1</h1>
      <div className="grid grid-cols-3">
        <div className="">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="pt-10">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default SecOne
