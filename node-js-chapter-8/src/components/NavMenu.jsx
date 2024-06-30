"use Client";
import { DarkThemeToggle, Navbar, useThemeMode } from "flowbite-react";
import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavMenu = () => {
  const { mode, setMode } = useThemeMode();
  return (
    <Navbar
      fluid
      className=''>
      <Navbar.Brand as={Link}>
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          My Product Site
        </span>
      </Navbar.Brand>
      {/* <Flowbite>
        <DarkThemeToggle />
        </Flowbite> */}
      <div className='flex justify-center items-center'>
        <Navbar.Toggle />
        <DarkThemeToggle className='md:hidden' />
      </div>
      <Navbar.Collapse>
        <div className='md:flex md:justify-center md:items-center gap-5'>
          <DarkThemeToggle className='hidden md:block' />
          <Navbar.Link
            as={NavLink}
            to='/'>
            Products
          </Navbar.Link>
          <Navbar.Link
            as={NavLink}
            to={"/add"}>
            Add Product
          </Navbar.Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavMenu;
