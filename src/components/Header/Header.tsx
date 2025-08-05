// src/components/Header/Header.tsx
import Link from "next/link";
import Image from "next/image"; // 1. Import next/image
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* 2. Replace the text logo with the Image component */}
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/images/Logo/kitchentechie-logo.png" // Path from the 'public' folder
            alt="KitchenTechie Logo"
            height={70}
            width={150}
            quality={100}
            priority={true} // Important for LCP (Largest Contentful Paint)
          />
        </Link>
        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
