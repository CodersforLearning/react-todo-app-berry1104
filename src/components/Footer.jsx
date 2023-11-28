import React from "react";


function Footer() {
  const name = "Berry";
  const date = new Date();
  const year = date.getFullYear();
  return (
     <footer>
        <p>Created by {name} @ {year}</p>
     </footer>
  );
}

export default Footer;