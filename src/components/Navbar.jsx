import logo from "../assets/rupakBoseLogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGoogleScholar } from "react-icons/fa6"
// import {Projects} from '../pages/Projects'
 import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items=center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img src={logo} alt = "logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a  href="https://ee.linkedin.com/in/boserupak1" target="_blank">
            <FaLinkedin/>
          </a>
          <a href="https://scholar.google.com/citations?user=TvYWlecAAAAJ&hl=en" target="_blank">
            <FaGoogleScholar/>
          </a>
        </div>
    </nav>
  )
}

export default Navbar