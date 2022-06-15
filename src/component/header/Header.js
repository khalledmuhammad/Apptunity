import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import Hamburger from "hamburger-react";
import NavLogo from "../assets/logo-white.svg"

const Header = () => {
  const menu = [
    {
      title: "HOME",
      path: "home",
    },
    {
      title: "SERVICES",
      path: "services",
    },
    {
      title: "SKILLS",
      path: "skills",
    },
    {
      title: "INDUSTRIES",
      path: "industries",
    },
    {
      title: "BLOGS",
      path: "blogs",
    },
    {
      title: "WE ARE HIRING",
      path: "hiring",
    }
  ];
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className='NavBar ' >
       <div className="menu-icon">
        <Hamburger toggled={isOpen} toggle={setOpen} color="teal" />
      </div>
      <div className="rightNav text-white  " data-aos="slide-right" > 
      <img className="navLogo" alt="Nav logo"    src={NavLogo} />

      </div>
      <div className="leftNav text-white" > 
       {
        menu.map((links)=>{
          return  <Link className="navlinks" data-aos="fade-in" to={links.path} spy={true} smooth={true} offset={50} duration={500} >{links.title}</Link>
        })
       }
      
      </div>
      <div>
        {isOpen && (
          <ul className="menu-item">
            {menu.map((item) => {
              return (
                <li>
                  <Link  to={item.path} spy={true} smooth={true} offset={50} duration={500} onClick={()=>setOpen(false)}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Header