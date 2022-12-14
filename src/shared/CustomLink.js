import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      className="mx-3 font-semibold sm:text-lg"
      style={{
        color: match ? "#2827CC" : "#000",
        textDecoration: match ? "underline" : "none",
      }}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
