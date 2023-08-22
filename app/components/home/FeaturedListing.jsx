import Image from "next/image";
import Link from "next/link";

// STYLES
import styles from "@/public/styles/components/page/home/featured_listing.module.scss";

// ASSET IMPORTS
import iconBed from "@/public/images/icons/bed.svg";
import iconBath from "@/public/images/icons/bath.svg";
import iconRuler from "@/public/images/icons/ruler.svg";

// DATA
import listings from "@/app/data/listings";

const FeaturedListing = ({ singleListing }) => {
  const { name, area, price, buildUp, bedrooms, bathrooms, cardNo, _id } =
    singleListing;

  // GET IMAGE for card
  const getImage = () => {
    const listing = listings.filter((listing) => listing.id === _id);
    return listing[0].image;
  };

  return (
    <li className={styles.grid_card}>
      <Link href={`/properties/${_id}`}>
        <Image
          src={getImage()}
          width={786}
          height={591}
          className={styles.listing_image}
        />

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
      </Link>
    </li>
  );
};

export default FeaturedListing;
