import Link from "next/link";
import Image from "next/image";

// STYLES
import styles from "@/public/styles/pages/property.module.scss";

// ICON
import chevron from "@/public/images/icons/chevron-left.png";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import PropertySwiper from "@/app/components/property/PropertySwiper";
import Footer from "@/app/components/Footer";

async function getDetails(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/properties/${id}`
  );
  return res.json();
}

const SingleProperty = async ({ params: { id } }) => {
  const {
    _id,
    image,
    area,
    bathrooms,
    bedrooms,
    buildUp,
    category,
    completion,
    description,
    features,
    name,
    parking,
    price,
    refNo,
    agent,
  } = await getDetails(id);

  // Split the description, extract each paragraph and
  // assign to an index
  let descSplit;
  if (description) {
    descSplit = description.split("|");
  }

  return (
    <>
      <Navbar paddingTop="2.5rem" height="10rem" />

      <section id={styles.gallery}>
        <div
          className={styles.chevron_box}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src={chevron}
            alt="chevron-left"
            className={styles.chevron_left}
          />
          <Link href="/search">BACK TO SEARCH PAGE</Link>
        </div>
        <div className={styles.gallery_grid}>
          <div className={styles.brief}>
            <h1>{name}</h1>
            <h2>{area}</h2>
            <div className={styles.brief_grid}>
              <div className={styles.each_detail}>
                <h4>Price:</h4>
                <p>AED {price.toLocaleString()}</p>
              </div>
              <div className={styles.each_detail}>
                <h4>Property Type:</h4>
                <p style={{ textTransform: "capitalize" }}>{category}</p>
              </div>
              <div className={styles.each_detail}>
                <h4>Reference Number:</h4>
                <p>GS-S-{refNo}</p>
              </div>
              <div className={styles.each_detail}>
                <h4>Completion Date:</h4>
                <p>{completion}</p>
              </div>
              <div className={styles.each_detail}>
                <h4>Bedrooms:</h4>
                <p>{bedrooms}</p>
              </div>
              <div className={styles.each_detail}>
                <h4>Bathrooms:</h4>
                <p>{bathrooms}</p>
              </div>
              <div className={styles.each_detail}>
                <h4>Built Up Area:</h4>
                <p>{buildUp.toLocaleString()} sq ft.</p>
              </div>
              <div className={styles.each_detail}>
                <h4>Car Parking Space:</h4>
                <p>{parking}</p>
              </div>
            </div>
          </div>
          <div className={styles.gallery}>
            <PropertySwiper images={image} />
          </div>
        </div>
      </section>

      <section id={styles.details}>
        <ul className={styles.grid}>
          <li className={styles.property_details}>
            <h1>Property Description</h1>
            {descSplit.map((each, index) => (
              <p key={index}>{each}</p>
            ))}
          </li>
          <li className={styles.agent_details}>
            <h3>Agent Details</h3>

            <Image
              className={styles.agent_img}
              src={agent.image}
              alt={agent.name}
              width={350}
              height={350}
            />

            <ul className={styles.agent_info}>
              <li>{agent.name}</li>
              <li>
                <Link href={`tel:${agent.contact.trim()}`}>
                  {agent.contact}
                </Link>
              </li>
              <li>
                <Link href={`mailto:${agent.email}`}>{agent.email}</Link>
              </li>
              <li>
                <Link href={`/agents/${agent._id}`}>View Agent Profile</Link>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section id={styles.features}>
        <h3>Features & Amenities</h3>
        {features && features.map((each, index) => <p key={index}>{each}</p>)}
      </section>

      <Footer marginTop={"7rem"} />
    </>
  );
};

export default SingleProperty;
