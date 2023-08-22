import Link from "next/link";

// STYLES
import styles from "@/public/styles/components/footer.module.scss";

const Footer = ({ marginTop }) => {
  return (
    <footer id={styles.footer} style={{ marginTop: marginTop }}>
      <ul className={styles.grid_footer}>
        <li>
          <h5>Sitemap</h5>
          <ul>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/search">
              <li>Properties</li>
            </Link>
            <Link href="/agents">
              <li>Agents</li>
            </Link>
            <Link href="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </li>
        <li>
          <h5>Information</h5>
          <ul>
            <Link href="/faq">
              <li>FAQ</li>
            </Link>
            <Link href="/privacy-policy">
              <li>Privacy Policy</li>
            </Link>
          </ul>
        </li>
        <li>
          <h5>Join Our Newsletter</h5>
          <p>
            Subscribe to our newletters and be the first to know about exclusive
            deals, property price trends and real estate news in the U.A.E.
          </p>
          <form>
            <input
              type="email"
              name="email"
              id={styles.email}
              placeholder="Your email address"
            />
            <button type="submit">Subscribe</button>
          </form>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
