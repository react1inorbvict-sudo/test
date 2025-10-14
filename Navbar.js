import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
       <h2>MyReactApp</h2>
+      <h2 style={{ color: "white" }}>MyReactApp</h2>

      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#282c34",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
    margin: "0 10px",
    fontWeight: "bold",
  },
};

export default Navbar;
