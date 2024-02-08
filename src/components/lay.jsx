import { Outlet } from 'react-router-dom'
import "../index.css"

const Lay = () => {
  return (
    <>
        <Outlet/>
        <footer>
            <span className="layOut">Loyout</span>
        </footer>
    </>
  )
}

export default Lay