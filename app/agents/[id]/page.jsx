import Link from "next/link";

// STYLES
import styles from "@/public/styles/pages/agent.module.scss";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import AgentModal from "@/app/components/agent/AgentModal";

async function getAgent(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/agents/${id}`
  );
  return res.json();
}

export default async function Agent({ params: { id } }) {
  const {
    experience,
    image,
    language,
    listings,
    name,
    position,
    qualification,
  } = await getAgent(id);

  // Retrieve agent's first name and use in 'AgentModal' component
  const splitName = name && name.split(" ")[0];

  return (
    <>
      <Navbar paddingTop={0} />
      <section id={styles.agent}>
        <div className={styles.agent_grid}>
          <div className={styles.agent_snapshot}>
            <img src={image} alt="Wolfram Agent-Aidan Glauert" />
            <div className={styles.single_detail}>
              <h3>Qualification(s)</h3>
              <h4>{qualification}</h4>
            </div>
            <div className={styles.single_detail}>
              <h3>Spoken Languages</h3>
              <h4>{language}</h4>
            </div>
            <div className={styles.single_detail}>
              <h3>Real Estate Experience</h3>
              <h4>{experience} years</h4>
            </div>
          </div>

          <div className={styles.agent_details}>
            <h1>{name}</h1>
            <h2>{position}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              illum doloremque architecto vel, ex, non labore ipsam omnis iusto
              quia officiis dignissimos earum deserunt optio? Laborum repellat,
              unde corrupti repellendus dicta ullam vitae blanditiis nam, quae,
              eligendi reiciendis. Tenetur odio velit unde eaque iste quae in
              autem rem quas laboriosam eius, commodi et blanditiis accusantium
              eveniet impedit, nobis a mollitia dicta hic, nesciunt dolore fuga.
              Fuga assumenda magnam temporibus explicabo reiciendis velit earum
              doloremque dignissimos. Quas est aspernatur fugiat porro delectus
              nulla. Ab odit reprehenderit labore nihil numquam consequatur
              ipsa, eos dicta molestiae accusamus porro quidem expedita
              aspernatur officia illum.
            </p>

            {listings && listings.length > 0 ? (
              <AgentModal name={splitName} />
            ) : null}

            {listings && listings.length > 0 && (
              <div className={styles.agent_listings}>
                <h2>Property Listings by {splitName}</h2>
                <table className={styles.listing_table}>
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Area</th>
                      <th>Type</th>
                      <th>Size</th>
                      <th>Bedrooms</th>
                      <th>Price</th>
                      <th>View Property</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listings &&
                      listings.map((each, index) => {
                        return (
                          <tr key={index}>
                            <td>{each.name}</td>
                            <td>{each.area}</td>
                            <td style={{ textTransform: "capitalize" }}>
                              {each.category}
                            </td>
                            <td>{each.buildUp.toLocaleString()} sq. ft</td>
                            <td>{each.bedrooms}</td>
                            <td>AED {each.price.toLocaleString()}</td>
                            <td>
                              <Link href={`/properties/${each._id}`}>View</Link>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
