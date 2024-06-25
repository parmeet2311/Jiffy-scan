import React, { useState, useEffect } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";

import UserDropdown from "../userDropdown";
import { SearchBarDesktop, SearchBarMobile } from "../customSearch";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const navLinks = [
  {
    label: "Home",
    link: "/",
    submenu: [],
  },
  {
    label: "Blockchain",
    link: "#",
    submenu: [
      { sublabel: "Submenu1", subLink: "/" },
      { sublabel: "Submenu2", subLink: "/" },
      { sublabel: "Submenu3", subLink: "/" },
    ],
  },
  {
    label: "Developers",
    link: "#",
    submenu: [
      { sublabel: "Submenu1", subLink: "/" },
      { sublabel: "Submenu2", subLink: "/" },
      { sublabel: "Submenu3", subLink: "/" },
    ],
  },
  {
    label: "More",
    link: "/",
    submenu: [],
  },
  {
    label: "About 4337",
    link: "/",
    submenu: [],
  },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentSubMenu, setCurrentSubMenu] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState({});

  const handleMenu = (event, submenu) => {
    setAnchorEl(event.currentTarget);
    setCurrentSubMenu(submenu);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentSubMenu([]);
  };

  const toggleMobileSubMenu = (index) => {
    setMobileSubMenu((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };


  return (
    <AppBar
      position="static"
      sx={{
        background: "white",
        boxShadow: "none",
        padding: "0px",
        margin: "0px",
      }}
      className={`font-inter`}
    >
      <div className="container font-inter text-[#5A5A62]">
        <Toolbar
          sx={{ padding: "0" }}
          className=" flex justify-between gap-x-[10px] xs:gap-x-[40px]"
        >
          <div className="flex items-center min-w-fit gap-x-[40px] justify-between">
            <Box sx={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <Image
                  src="/assets/logo/jiffy-logo.png"
                  alt="logo"
                  width={40}
                  height={20}
                />
              </IconButton>
              <Typography
                variant="h6"
                sx={{ fontWeight: "500" }}
                className="hidden xs:block text-black font-bold ml-2"
              >
                jiffyscan
              </Typography>
            </Box>
          </div>
          <div
            style={{ transition: "0.3s" }}
            className="hidden gap-x-[20px] xl:gap-x-[40px] lg:flex items-center"
          >
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.submenu.length > 0 ? (
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={(e) => handleMenu(e, link.submenu)}
                  >
                    <Typography variant="body1">{link.label}</Typography>
                    <FiChevronDown />
                  </div>
                ) : (
                  <Link href={link.link} passHref>
                    <Typography
                      variant="body1"
                      className="cursor-pointer whitespace-nowrap"
                    >
                      {link.label}
                    </Typography>
                  </Link>
                )}
              </div>
            ))}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: 48 * 4.5,
                  width: "20ch",
                  marginTop: "8px",
                },
              }}
            >
              {currentSubMenu.map((submenuItem, index) => (
                <MenuItem
                  key={index}
                  onClick={handleClose}
                  component={Link}
                  href={submenuItem.subLink}
                >
                  {submenuItem.sublabel}
                </MenuItem>
              ))}
            </Menu>
          </div>
          <div className="hidden 2xl:block">
            <SearchBarDesktop />
          </div>
          <div
            style={{ transition: "0.3s" }}
            className="flex items-center lg:gap-x-[10px]"
          >
            <div className="block 2xl:hidden">
              <SearchBarMobile />
            </div>
            <UserDropdown />
            <IconButton
              
              color="inherit"
              aria-haspopup="true"
            >
              <MdDarkMode className="swtich-icon" />
            </IconButton>
            <div className="lg:hidden">
              <IconButton
                color="inherit"
                aria-haspopup="true"
                onClick={() => setShowMenu(!showMenu)}
              >
                <RxHamburgerMenu className="text-[#5A5A62]" />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </div>
      <div
        className={`nav-menus-wrapper relative text-[#494949]  ${
          showMenu ? "nav-menus-open" : ""
        } `}
      >
        <div className="text-2xl absolute right-0 m-2 text-black">
          <IconButton onClick={() => setShowMenu(false)}>
            <IoCloseOutline />
          </IconButton>
        </div>
        <div className="mt-[2rem]">
          {navLinks.map((link, index) => (
            <div key={index} className="border-b border-gray-200 py-4 px-6">
              {link.submenu.length > 0 ? (
                <div>
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleMobileSubMenu(index)}
                  >
                    <Typography variant="body1">{link.label}</Typography>
                    <FiChevronDown />
                  </div>
                  <div
                    className={`${
                      mobileSubMenu[index] ? "block" : "hidden "
                    } flex flex-col mt-2 ml-4`}
                  >
                    {link.submenu.map((submenuItem, subIndex) => (
                      <Link
                        key={subIndex}
                        className={`py-2  ${
                          link.submenu.length - 1 == subIndex ? "" : "border-b"
                        }`}
                        href={submenuItem.subLink}
                        passHref
                      >
                        <Typography
                          variant="body2"
                          className="cursor-pointer py-1 text-gray-500"
                        >
                          {submenuItem.sublabel}
                        </Typography>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link href={link.link} passHref>
                  <Typography variant="body1" className="cursor-pointer">
                    {link.label}
                  </Typography>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => setShowMenu(false)}
        className={`nav-overlay-panel  ${showMenu ? "" : "hidden"}`}
      ></div>
    </AppBar>
  );
};

export default Navbar;
