// src/components/Footer/Footer.tsx
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>&copy; {currentYear} KitchenTechie. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
