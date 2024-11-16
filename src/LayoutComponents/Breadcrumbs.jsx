import React from "react";
import "./Breadcrumbs.css";

const Breadcrumbs = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Electronics", href: "/products/electronics" },
    { label: "Laptops", href: "/products/electronics/laptops" },
  ];

  return (
    <nav className="breadcrumbs">
      {breadcrumbItems.map((item, index) => (
        <span key={index} className="breadcrumb-item">
          <a href={item.href} className="breadcrumb-link">
            {item.label}
          </a>
          {index < breadcrumbItems.length - 1 && (
            <span className="breadcrumb-separator">/</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
