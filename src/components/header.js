import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
// import Image from "../components/Image"

const Header = ({ siteTitle }) => (
  <header className="bg-white shadow-2xl sticky top-0 z-10">
    <div className="container px-10 py-4 flex mx-auto justify-between items-center ">
      <div className="flex items-center gap-5">
        <a href="/">{/* <Image src="logo.png" className="w-10" alt="" /> */}</a>
        <h1>
          <Link to="/" className="text-black font-bold uppercase ">
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div>
        <a href="...">
          <button className="btn">Donate Now</button>
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
