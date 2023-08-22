import Link from "next/link";
import Image from "next/image";

// STYLES
import styles from "@/public/styles/pages/home.module.scss";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import FeaturedListing from "@/app/components/home/FeaturedListing";
import DevelopmentSwiper from "./components/home/DevelopmentSwiper";
import Footer from "@/app/components/Footer";

// ASSET IMPORT
import bigHome from "@/public/images/pages/home/Home3.png";
import phoneImg from "@/public/images/pages/home/mobile-tinified.png";
import grandViews from "@/public/images/pages/home/featured_developments/grand-views.jpg";
import muraba from "@/public/images/pages/home/featured_developments/muraba.jpg";
import ghadeer from "@/public/images/pages/home/featured_developments/ghadeer-villas.jpg";
import barari from "@/public/images/pages/home/select_neighbourhoods/barari.jpg";
import palm from "@/public/images/pages/home/select_neighbourhoods/palm-jumeirah.jpg";
import jbr from "@/public/images/pages/home/select_neighbourhoods/jbr.jpg";

async function getListings() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/properties/listings`
  );
  return res.json();
}

export default async function Home() {
  const listings = await getListings();
  return (
    <>
      {/* SECTION: HERO */}
      <section id={styles.hero}>
        <Navbar
          bgdColor="transparent"
          // paddingTop="1rem"
          // height="7vh"
        />

        <div className={styles.hero_content}>
          <h1>
            Helping you find a place{" "}
            <span className={styles.mobile}> to call home</span>
          </h1>
          <p>
            Allow us to help you search through a wide collection of quality
            properties from which you are bound to call one your everlasting
            home.
          </p>
          <Link href="/search">SEARCH PROPERTIES</Link>
        </div>
      </section>

      {/* SECTION: FEATURED PROPERTIES */}
      {/* <section id={styles.featured}>
        <h3>
          Featured <span className={styles.light}>Property</span>
        </h3>
        <div className={styles.img_contentBox}>
          <div className={styles.details_box}>
            <h5>Al Barari - Dahlia Villas</h5>
            <p>
              Currently on offer, is the exquisite Dahlia Villas. This villa
              includes 6 en-suite bedrooms, a study room, separate formal and
              family living and dining areas, family kitchen and service
              kitchen, a laundry, two basement rooms with bathroom, and a
              self-contained maids living quarters.
            </p>

            <div className={styles.chevron_box}>
              <Link href="/properties/60099de9fa9fd125f0b755c5">
                VIEW PROPERTY
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* SECTION: LATEST LISTINGS */}
      <section id={styles.latest_listings}>
        <h3>
          Latest <span className={styles.light}>Listings</span>
        </h3>
        <ul className={styles.grid}>
          {listings.map((each) => (
            <FeaturedListing key={each._id} singleListing={each} />
          ))}
        </ul>
        <Link href="/search" className={styles.view}>
          <button>VIEW ALL LISTINGS</button>
        </Link>
      </section>

      {/* SECTION: DEVELOPMENT */}
      <section id={styles.development}>
        <h3>
          Featured <span className={styles.light}>Developments</span>
        </h3>
        {/* SWIPER till 450px */}
        <DevelopmentSwiper />

        <div className={styles.mobile_gallery}>
          <Link
            href="/projects/6000d4c6fc5bb6333473a267"
            className={styles.project}
          >
            <Image src={grandViews} alt="Grand Views" />
            <p>Grand Views</p>
          </Link>

          <Link
            href="/projects/6000d4c6fc5bb6333473a266"
            className={styles.project}
          >
            <Image src={muraba} alt="Grand Views" />
            <p>Muraba Residences</p>
          </Link>

          <Link
            href="/projects/6000d4c6fc5bb6333473a265"
            className={styles.project}
          >
            <Image src={ghadeer} alt="Grand Views" />
            <p>Al Ghadeer</p>
          </Link>
        </div>
      </section>

      {/* SECTION: NEIGHBOURHOOD */}
      <section id={styles.neighbourhood}>
        <h3>
          Select <span className={styles.light}>Neighbourhoods</span>
        </h3>
        <div className={styles.grid_neighbourhood}>
          <Link
            href="/neighbourhood/dubai-marina"
            className={styles.select_img_1}
          >
            <div className={styles.overlay}>
              <div className={styles.overlay_content}>
                <Link href="/neighbourhood/dubai-marina">
                  View Properties in <br style={{ marginBottom: "0.5rem" }} />
                  Dubai Marina
                </Link>
              </div>
            </div>
          </Link>

          <Link href="/neighbourhood/al-barari" className={styles.select_img_2}>
            <Image src={barari} alt="Al Barari" loading="lazy" />
            <div className={styles.overlay}>
              <div className={styles.overlay_content}>
                <Link href="/neighbourhood/al-barari">
                  View Properties in <br style={{ marginBottom: "0.5rem" }} />
                  Al Barari
                </Link>
              </div>
            </div>
          </Link>

          <Link
            href="neighbourhood/palm-jumeirah"
            className={styles.select_img_3}
          >
            <Image src={palm} alt="Palm Jumeirah" loading="lazy" />
            <div className={styles.overlay}>
              <div className={styles.overlay_content}>
                <Link href="neighbourhood/palm-jumeirah">
                  View Properties in <br style={{ marginBottom: "0.5rem" }} />
                  Palm Jumeirah
                </Link>
              </div>
            </div>
          </Link>

          <Link
            href="/neighbourhood/jumeirah-beach-residence"
            className={styles.select_img_4}
          >
            <Image src={jbr} alt="JBR" loading="lazy" />
            <div className={styles.overlay}>
              <div className={styles.overlay_content}>
                <Link href="/neighbourhood/jumeirah-beach-residence">
                  View Properties in <br style={{ marginBottom: "0.5rem" }} />
                  JBR
                </Link>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* SECTION: EXPERTS */}
      <section id={styles.experts}>
        <div className={styles.experts_grid}>
          <div
            className={styles.experts_content}
            // ref={phoneContent}
          >
            <h3 className={styles.light}>Exclusive Access to Local Experts</h3>
            <p>
              Our Luxury Sales Specialists will offer you the best of services
              and expertise to keep in mind before buying or selling your
              property.
            </p>
            <p>
              Their networking and negotiating skills will ensure that you get
              the results you want – whether it’s a sound property investment,
              purchasing a property or getting the right price for your
              property.
            </p>
            <Link href="/agents">
              <button>FIND AN AGENT</button>
            </Link>
          </div>
          <div className={styles.experts_img}>
            <Image src={phoneImg} alt="phone" />
          </div>
        </div>
      </section>

      <section id={styles.experts_mobile}>
        <div className={styles.experts_flex}>
          <div className={styles.experts_img}>
            <Image src={phoneImg} alt="phone" />
          </div>
          <div className={styles.experts_content}>
            <h3 className={styles.light}>Exclusive Access to Local Experts</h3>
            <p>
              Our Luxury Sales Specialists will offer you the best of services
              and expertise to keep in mind before buying or selling your
              property.
            </p>
            <p>
              Their networking and negotiating skills will ensure that you get
              the results you want – whether it’s a sound property investment,
              purchasing a property or getting the right price for your
              property.
            </p>
            <Link href="/agents">
              <button>FIND AN AGENT</button>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer marginTop={"5rem"} />
    </>
  );
}
