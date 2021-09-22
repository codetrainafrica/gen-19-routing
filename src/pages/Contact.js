import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <Link to="/contact/12" target="_blank">
        Go to details
      </Link>
      <Link to="/contact/190">Go to details</Link>
    </div>
  );
}
