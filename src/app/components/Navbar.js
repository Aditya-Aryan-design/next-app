import mongoose from "@/DB/connect"
import navModel from "@/DB/model/NavSchema"
import Navheading from "./Navheading"
import Navlink from "./Navlink"


async function Navbar() {
  try {
    const navRes = await navModel.findById("64ac6ffc6eab08f5e38c121d")

    const { nav_titleOne, nav_titleTwo, nav_links } = navRes
    return (
      <nav>
        <Navheading titleOne={nav_titleOne} titleTwo={nav_titleTwo} />
        <ul>
          {
            nav_links.map((e) => <Navlink key={e._id} title={e.links_title} link={e.links_link} />)
          }
        </ul>
      </nav>
    )
  } catch (e) {
    console.log(e);
    return (
      <nav>
        <Navheading titleOne={process.env.NAME} titleTwo={process.env.Frame} />
        <ul>
          <Navlink title="Home" link="#home" />
          <Navlink title="About" link="#about" />
          <Navlink title="Project" link="#project" />
          <Navlink title="Skills" link="#skills" />
          <Navlink title="Contact" link="#contact" />
        </ul>
      </nav>
    )
  }

}

export default Navbar
