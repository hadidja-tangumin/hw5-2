import { NavLink } from 'react-router-dom'
import "../index.css"

const Nav = () => {
  return (
    <nav>
        <ul className="navbar__list">
            <li>
                <NavLink to={"/create"}>Create</NavLink>
            </li>
            <li>
                <NavLink to={"/post"}>Post</NavLink>
            </li>
            <li>
                <NavLink to={"/"}>Go back</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Nav