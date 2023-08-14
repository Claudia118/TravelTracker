import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <h1>
          TravelTracker
          <br /> keeps track of your adventures.
        </h1>
        <h2>
          Never forget your wonderful experiences, and show your friends how you
          have wandered the world.
        </h2>

        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
