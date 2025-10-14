import React from "react";

/**
 * Renders the application's About page containing a heading and a short description.
 *
 * @returns {JSX.Element} The About page markup.
 */
function About() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>ℹ️ About Page</h1>
      <p>This app demonstrates basic React routing and components.</p>
    </div>
  );
}

export default About;