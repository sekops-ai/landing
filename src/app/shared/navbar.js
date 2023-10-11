"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useModal from "../hooks/useModal";
import { ContactUsModal } from "./contact-us-modal";

// import SmoothScroll from "smooth-scroll";

export const Navbar = () => {
  const { isShowing, toggle } = useModal();
  const [isMobilNavbarHidden, toggleMobileNavbar] = useState(false);

  const makeLinksSmooth = () => {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });
  };

  const smoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  useEffect(() => {
    makeLinksSmooth();
  }, []);

  return (
    <>
      <div>
        {/* navbar menu desktop */}
        <nav
          id="navbar"
          className="flex lg:px-[100px] lg:pt-[34px] pt-6 px-6   items-center w-full absolute z-[100] top-0 left-0"
        >
          <div className="flex-1">
            <Image src="/assets/logo.svg" alt="logo" width={145} height={36} />
          </div>
          <div className="flex-[0_0_550px] justify-center  text-[1rem] lg:block hidden">
            <ul className="flex items-center">
              <li className="pr-8">
                <div className="hover:text-blue-primary transition-all duration-150 ease-in-out cursor-pointer">
                  Home
                </div>
              </li>
              <li className="pr-8">
                <a
                  href="#why-sekops"
                  className="hover:text-blue-primary transition-all duration-150 ease-in-out"
                >
                  Why SekOps?
                </a>
              </li>
              <li className="pr-8">
                <a
                  href="#features"
                  className="hover:text-blue-primary transition-all duration-150 ease-in-out"
                >
                  Capabilities
                </a>
              </li>
              <li className="pr-8">
                <a
                  href="#techs"
                  className="hover:text-blue-primary transition-all duration-150 ease-in-out"
                >
                  Technologies
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 justify-end lg:flex hidden">
            <button
              className="bg-blue-primary w-[150px] py-4 rounded"
              onClick={toggle}
            >
              <span className="font-medium text-[15px] text-[#fff]">
                Book a demo
              </span>
            </button>
          </div>
          <button
            onClick={(e) => toggleMobileNavbar(!isMobilNavbarHidden)}
            id="menu-mobile-toggler"
            aria-label="open menu"
            className="lg:hidden block noSelect  cursor-pointer focus:outline-none"
          >
            <Image
              src="/assets/icons/menu-mobile.svg"
              alt="menu"
              className="pointer-events-none"
              height={24}
              width={24}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </button>
        </nav>
        {/* navbar menu mobile */}

        {isMobilNavbarHidden && (
          <nav className={`navbar-mobile-wrapper`} id="navbar-mobile-menu">
            <div className="flex items-center justify-between py-6 mb-6">
              <Link href="/" className="noSelect">
                <Image
                  src="/assets/logo.svg"
                  alt="logo"
                  width={145}
                  height={36}
                ></Image>
              </Link>
              <div
                onClick={(e) => toggleMobileNavbar(!isMobilNavbarHidden)}
                id="close-menu"
                className="flex items-center justify-center cursor-pointer"
              >
                <Image
                  src="/assets/icons/close.svg"
                  alt="cancel"
                  width={32}
                  height={32}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>

            <ul className="w-full mb-4 noSelect">
              <li className="w-full mb-4 noSelect">
                <button
                  onClick={toggle}
                  className="bg-blue-primary  py-3 rounded block w-full"
                  tabIndex="0"
                >
                  <span className="font-medium text-[15px] text-[#fff]">
                    Book a demo
                  </span>
                </button>
              </li>
            </ul>

            <ul className="noSelect">
              <li className="flex items-center text-black-primary cursor-pointer font-medium h-[48px] border-b border-[#333]">
                <a
                  onClick={(e) => toggleMobileNavbar(!isMobilNavbarHidden)}
                  href="#why-sekops"
                  className="w-full hover:underline font-sans text-sm"
                >
                  Why SekOps?
                </a>
              </li>
              <li className="flex items-center text-black-primary cursor-pointer font-medium h-[48px] border-b border-[#333]">
                <a
                  onClick={(e) => toggleMobileNavbar(!isMobilNavbarHidden)}
                  href="#features"
                  className="w-full hover:underline font-sans text-sm"
                >
                  Capabilities
                </a>
              </li>
              <li className="flex items-center text-black-primary cursor-pointer font-medium h-[48px] border-b border-[#333]">
                <a
                  onClick={(e) => toggleMobileNavbar(!isMobilNavbarHidden)}
                  href="#techs"
                  className="w-full hover:underline font-sans text-sm"
                >
                  Technologies
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>

      <ContactUsModal isShowing={isShowing} hide={toggle} />
    </>
  );
};
