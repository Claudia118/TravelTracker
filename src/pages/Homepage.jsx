import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <section>
        <h1>
          TravelTracker
          <br /> keeps track of your adventures.
        </h1>
        <h2>
          Never forget your wonderful experiences, and show your friends how you
          have wandered the world.
        </h2>

        <Link to="./app" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
