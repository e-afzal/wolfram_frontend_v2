import Link from "next/link";

// STYLES
import styles from "@/public/styles/pages/contact.module.scss";

// COMPONENTS
import Navbar from "../components/Navbar";

const Contact = () => {
  // HANDLERS
  const formHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <>
      <Navbar paddingTop={0} />
      <section id={styles.contact}>
        <div className={styles.contact_grid}>
          <div className={styles.contact_details}>
            <h3>Connect with us</h3>
            <p>
              We invite you to provide us with feedback or contact a specific
              department with any queries you might have.
            </p>

            <div className={styles.address}>
              <p>Wolfram Realty</p>
              <p>Level 6, Jumeirah Emirates Towers,</p>
              <p>Sheikh Zayed Road, DIFC</p>
              <p>Dubai, United Arab Emirates</p>
            </div>

            <div className={styles.email}>
              <Link href="mailto:info@wolframrealty.com">
                info@wolframrealty.com
              </Link>
            </div>

            <div className={styles.phone}>
              <Link href="tel:+97143198181">+971 4 319 8181</Link>
            </div>
          </div>
          <div className={styles.contact_form}>
            <h3>Have questions?</h3>
            <form
            // onSubmit={formHandler}
            >
              <select
                name="option"
                id={styles.option}
                // onChange={(e) => setOption(e.target.value)}
              >
                <option selected disabled>
                  I'd like to:
                </option>
                <option value="rentProperty">Rent a property</option>
                <option value="purchaseProperty">Purchase a property</option>
                <option value="listProperty">List/Sell a property</option>
                <option value="adsAndSponsorship">
                  Discuss about advertising and/or sponsorship
                </option>
                <option value="generalFeedback">Give a general feedback</option>
              </select>
              <input
                type="text"
                name="name"
                id={styles.name}
                placeholder="Enter your name"
                // onChange={(e) => setName(e.target.value.trim())}
              />
              <input
                type="email"
                name="email"
                id={styles.email}
                placeholder="Enter your email"
                // onChange={(e) => setEmail(e.target.value.trim())}
              />
              <input
                type="tel"
                name="phone"
                id={styles.phone}
                placeholder="Enter your contact number"
                // onChange={(e) => setNumber(e.target.value.trim())}
              />
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id={styles.message}
                cols="30"
                rows="10"
                // onChange={(e) => setMessage(e.target.value.trim())}
              ></textarea>
              <button type="submit">SEND ENQUIRY</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
