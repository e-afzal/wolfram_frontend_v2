// STYLES
import styles from "@/public/styles/components/page/neighbourhood/result_card.module.scss";

// ASSET IMPORT
import iconBed from "@/public/images/icons/bed.svg";
import iconBath from "@/public/images/icons/bath.svg";
import iconRuler from "@/public/images/icons/ruler.svg";
import Image from "next/image";

// Structure for EACH 'card' on the 'searchProperty' page
const ResultCard = ({ singleProperty }) => {
  const { name, area, price, buildUp, bedrooms, bathrooms, _id, image } =
    singleProperty;

  const singleImage = image ? image[0] : "";

  return (
    <li className={styles.grid_card}>
      <a href={`/properties/${_id}`} rel="noreferrer">
        <div>
          <img
            src={singleImage}
            alt=""
            className={styles.card_img}
            style={{
              // backgroundImage: `url(${image})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
            }}
          />
        </div>

        <div className={styles.card_details}>
          <h5>
            {name}, {area}
          </h5>
          <p>AED {price.toLocaleString()}</p>

          <div className={styles.flex_features}>
            <div className={styles.features_bed}>
              <Image src={iconBed} alt="bed-icon" />
              <p>{bedrooms}</p>
            </div>

            <div className={styles.features_bath}>
              <Image src={iconBath} alt="bath-icon" />
              <p>{bathrooms}</p>
            </div>

            <div className={styles.features_area}>
              <Image src={iconRuler} alt="measure-icon" />
              <p>{buildUp.toLocaleString()} sq.ft</p>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};

export default ResultCard;
