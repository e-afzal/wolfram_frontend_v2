import Link from "next/link";
import Image from "next/image";

// ICONS
import iconBed from "@/public/images/icons/bed.svg";
import iconBath from "@/public/images/icons/bath.svg";
import iconRuler from "@/public/images/icons/ruler.svg";

// Structure for EACH 'card' on the 'searchProperty' page
const ResultCard = ({ singleProperty, styles }) => {
  const { name, area, price, buildUp, bedrooms, bathrooms, _id, image } =
    singleProperty;

  const singleImage = image ? image[0] : "";

  return (
    <li className={styles.grid_card}>
      <Link href={`/properties/${_id}`} rel="noreferrer">
        <div>
          <Image
            src={singleImage}
            alt={name}
            className={styles.card_img}
            width={786}
            height={591}
          />
        </div>

        <div className={styles.card_details}>
          <h5>
            {name}, {area}
          </h5>
          <p>AED {price.toLocaleString()}</p>

          <div className={styles.flex_features}>
            <div className={styles.features_bed}>
              <Image src={iconBed} alt="bed-icon" height="30" />
              <p>{bedrooms}</p>
            </div>

            <div className={styles.features_bath}>
              <Image src={iconBath} alt="bath-icon" height="30" />
              <p>{bathrooms}</p>
            </div>

            <div className={styles.features_area}>
              <Image src={iconRuler} alt="measure-icon" height="30" />
              <p>{buildUp.toLocaleString()} sq.ft</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ResultCard;
