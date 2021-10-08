import React from "react"
// import Image from "../components/Image"
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="flex justify-center px-20 py-10 bg-nmr-darkBlue ">
      <div className="text-white flex justify-between w-full text-center">
        <div>
          <h1 className="text-2xl pb-5">Tenfinite</h1>
        </div>

        <div>
          <a href="...">Address: Dripping Springs No.301 Austin, Texas</a>
        </div>
        <div>
          <a href="...">Hello@tenfinite.com</a>
        </div>
        <div>
          <a href="...">Phone number: (+62) 82334670000</a>
        </div>

        <div className="flex gap-10 text-lg text-nmr-red">
          <a href="...">
            <div className="rounded-lg p-2 h-8 bg-white opacity-20">
              <FaFacebookF />
            </div>
          </a>
          <a href="...">
            <div className="rounded-lg p-2 h-8 bg-white opacity-20">
              <FaTwitter />
            </div>
          </a>

          <a href="...">
            <div className="rounded-lg p-2 h-8 bg-white opacity-20">
              <FaLinkedinIn />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
