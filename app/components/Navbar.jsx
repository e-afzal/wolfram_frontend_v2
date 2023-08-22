"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// STYLES
import styles from "@/public/styles/components/navbar.module.scss";

// ASSET IMPORT
import menu from "@/public/images/icons/menu.png";
import cross from "@/public/images/icons/cancel.png";
import logo from "@/public/images/logo-1x.png";

const Navbar = ({
  bgdColor = "#000",
  height = "10rem",
  paddingTop = "2.5rem",
}) => {
  // STATE
  const [modalOpen, setModalOpen] = useState(false);

  // HANDLERS
  const toggleMenu = () => {
    if (modalOpen) setModalOpen(false);
    if (!modalOpen) setModalOpen(true);
  };
  return (
    <nav
      className={styles.nav}
      style={{
        backgroundColor: bgdColor,
        height: height,
        paddingTop: paddingTop,
      }}
    >
      <div className={styles.nav_flex}>
        <div className={styles.menu_btn} onClick={toggleMenu}>
          <Image className={styles.menu_btn_img} src={menu} alt="Navbar Menu" />
        </div>

        {/* MENU OVERLAY - START */}
        <div
          id={styles.menu_overlay}
          style={{ display: modalOpen ? "flex" : "none" }}
        >
          <span className={styles.close_overlay} onClick={toggleMenu}>
            <Image
              src={cross}
              alt="cancel-icon"
              className={styles.cancel_icon}
            />
          </span>
          <ul>
            <Link href="/search">
              <li>PROPERTIES</li>
            </Link>
            <Link href="/agents">
              <li>AGENTS</li>
            </Link>
            <Link href="/contact">
              <li>CONTACT</li>
            </Link>
          </ul>
        </div>
        {/* MENU OVERLAY - END */}

        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="Wolfram Realty Logo" />
        </Link>

        <ul className={styles.nav_flex_list}>
          <Link href="/search">
            <li>PROPERTIES</li>
          </Link>
          <Link href="/agents">
            <li>AGENTS</li>
          </Link>
          <Link href="/contact">
            <li>CONTACT</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
