import React, { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import { Drawer, Button, Icon } from 'antd';
import {Link} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import './Sections/Navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import SlideshowIcon from '@material-ui/icons/Slideshow';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import "./Navbar.css";

function NavBar() {
  const [visible, setVisible] = useState(false)
  const [show,setShow] = useState(false);

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  const showSidebar = () => {
    setShow(!show);
  }


  return (
  <div className="navbar__main">
    <div className="navbar">
      <div className="navbar__left">
        <MenuIcon onClick={showSidebar} />
        <img  src="https://cdn.mos.cms.futurecdn.net/SytNGv3ZxAVCkvcspmbbvh.jpg" alt="Youtube" />
      </div>
      <div className="navbar__middle">
        <input placeholder="Search videos..." />
        <SearchIcon />
      </div>
        <div className="navbar__right">
        
          <Link to="/"><HomeIcon /></Link>
          <Link to="/video/upload"><AddCircleIcon /></Link>
          <Link to="/userVideo"><SlideshowIcon /></Link>
          {/* <Link to="/userAccount"><AccountCircleIcon /></Link> */}
        </div>
        <div className="sidebar__transition">
        {show && (
          <div className="sidebar">
          <div onClick ={showSidebar} class="sidebar__links">
          <Link to="/"><HomeIcon /></Link>
          <Link to="/video/upload"><AddCircleIcon /></Link>
          <Link to="/userVideo"><SlideshowIcon /></Link>
          </div>
        </div>
        )}
        </div>

    </div>
</div>

    // <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
    //   <div className="menu__logo">
    //     <Link to="/">Home</Link>
    //   </div>
    //   <div className="menu__container">
    //     <div className="menu_left">
    //       <LeftMenu mode="horizontal" />
    //     </div>
    //     <div className="menu_rigth">
    //       <RightMenu mode="horizontal" />
    //     </div>
    //     <Button
    //       className="menu__mobile-button"
    //       type="primary"
    //       onClick={showDrawer}
    //     >
    //       <Icon type="align-right" />
    //     </Button>
    //     <Drawer
    //       title="Basic Drawer"
    //       placement="right"
    //       className="menu_drawer"
    //       closable={false}
    //       onClose={onClose}
    //       visible={visible}
    //     >
    //       <LeftMenu mode="inline" />
    //       <RightMenu mode="inline" />
    //     </Drawer>
    //   </div>
    // </nav>
  )
}

export default NavBar