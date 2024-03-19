import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component from Next.js
import freshland from '@/../public/ImageData/freshlandlogo.png';
import styles from "./Header.module.css";
const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
    <header className={styles.header}>
      <div className={styles.headercontent}>
        <Link href="/">
          <div style={{ cursor: 'pointer' }}>
            <Image src={freshland} alt="Logo" width={95} height={30} />
          </div>
        </Link>
        <div style={{ flexGrow: 1 }} />
        <div className={styles.linkdescription}>
          <div className={styles.store}>
            <Link href="/description">Store</Link>
            <span className="chevrondown"><i className="fa-solid fa-chevron-down"></i></span>
          </div>
          <Link href="/description">Season Overview</Link>
          <Link href="/description">Farmers</Link>
          <Link href="/description">FAQ</Link>
          <Link href="/description">About Us</Link>
          <Link href="/description">Media</Link>
        </div>
        <div className={styles.icon} >
         
          <i className="fa-solid fa-cart-shopping"></i>
           <i className="fa-regular fa-user"></i>
         <i className="fa-solid fa-magnifying-glass"></i>
         {/* <i className="fa-solid fa-bars"></i> */}
       
        </div>
      </div>
    </header>
  </div>
  );
};

export default Header;
