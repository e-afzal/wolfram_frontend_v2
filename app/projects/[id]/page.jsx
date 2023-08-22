// STYLES
import styles from "@/public/styles/pages/project.module.scss";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import ProjectSwiper from "@/app/components/project/swiper";
import Footer from "@/app/components/Footer";

async function getProject(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects/${id}`
  );
  return res.json();
}

const ProjectTemplate = async ({ params: { id } }) => {
  const {
    amenities,
    bedrooms,
    carouselImg,
    deliveryDate,
    description,
    developer,
    name,
    planBooking,
    planComplete,
    planHandover,
    price,
    pricePerSqFt,
    status,
    units,
  } = await getProject(id);

  // Split the description
  const splitDescription = description && description.split("|");

  return (
    <>
      <Navbar paddingTop="2.5rem" height="10rem" />
      <section id={styles.carousel}>
        <ProjectSwiper images={carouselImg} />
      </section>

      <section id={styles.developer}>
        <div className={styles.info}>
          <h6>By {developer}</h6>
          <h2>{name}</h2>
          <p>{price && price.startsWith("AED") ? `From ${price}` : price}</p>
        </div>
      </section>

      <section id={styles.project_details}>
        <div id={styles.aboutProject} className={styles.aboutProject}>
          {/* <h3>Details</h3> */}
          <div className={styles.about_grid}>
            <div className={styles.detail}>
              <h5>Price from</h5>
              <p>{price}</p>
            </div>
            <div className={styles.detail}>
              <h5>Price Per Sq.Ft</h5>
              <p>{pricePerSqFt}</p>
            </div>
            <div className={styles.detail}>
              <h5>Status</h5>
              <p>{status}</p>
            </div>
            <div className={styles.detail}>
              <h5>Delivery Date</h5>
              <p>{deliveryDate}</p>
            </div>
            <div className={styles.detail}>
              <h5>Total Units</h5>
              <p>{units && units.toLocaleString()}</p>
            </div>
            <div className={styles.detail}>
              <h5>Bedrooms</h5>
              <p>{bedrooms}</p>
            </div>
          </div>
        </div>

        <div className={styles.description}>
          <h5>DESCRIPTION</h5>
          {splitDescription &&
            splitDescription.map((each, index) => <p key={index}>{each}</p>)}
        </div>

        <div className={styles.amenities}>
          <h5>AMENITIES</h5>
          <div className={styles.amenities_flex}>
            {amenities &&
              amenities.map((each, index) => <p key={index}>✔ {each}</p>)}
          </div>
        </div>

        {/* <div className="location">
          <h5>LOCATION</h5>
          <div className="map-box"></div>
        </div> */}

        <div id={styles.payment_plan} className={styles.payment_plan}>
          <h5>Payment Plan</h5>
          <div className={styles.payment_flex}>
            <div className={styles.booking}>
              <h4>{planBooking}%</h4>
              <p>On booking</p>
            </div>
            <div className={styles.handover}>
              <h4>{planHandover}%</h4>
              <p>On handover</p>
            </div>
            <div className={styles.progress}>
              <h4>{planComplete}%</h4>
              <p>Construction complete</p>
            </div>
          </div>
        </div>
      </section>

      <Footer marginTop={"7rem"} />
    </>
  );
};

export default ProjectTemplate;
