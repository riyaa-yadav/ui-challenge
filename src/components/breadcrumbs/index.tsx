import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

type BreadcrumbItem = {
  label: string;
  link: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <div className="breadcrumbs">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index !== items.length - 1 ? (
            <Link className="link" to={item.link}>
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
          {index !== items.length - 1 && (
            <span className="separator">{">"}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
