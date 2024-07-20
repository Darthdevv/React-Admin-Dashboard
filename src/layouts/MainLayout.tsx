import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Menu from "../components/Menu/Menu"
import {Outlet}  from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="main">
        <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default MainLayout