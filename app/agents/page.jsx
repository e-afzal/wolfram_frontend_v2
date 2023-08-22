import Link from "next/link";
import Image from "next/image";

// STYLES
import styles from "@/public/styles/pages/agents.module.scss";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

async function getAgents() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/agents`);
  return res.json();
}

export default async function Agents() {
  const agents = await getAgents();
  return (
    <>
      <Navbar paddingTop={"2.5rem"} height="10rem" />
      <section id={styles.team}>
        <h1>OUR TEAM</h1>
        <hr />
        <div className={styles.team_grid}>
          {agents &&
            agents.map((each, index) => {
              return (
                <Link
                  href={`/agents/${each._id}`}
                  className={styles.agent_box}
                  key={index}
                >
                  <Image
                    src={each.image}
                    alt={index + 1}
                    width={350}
                    height={350}
                  />
                  <h3>{each.name}</h3>
                  <h4>{each.position}</h4>
                </Link>
              );
            })}
        </div>
      </section>
      <Footer marginTop={"5rem"} />
    </>
  );
}
