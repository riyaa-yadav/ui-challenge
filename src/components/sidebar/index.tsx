import React from "react";
import "./index.css";

type SidebarProps = {
  name: string;
};

const Sidebar: React.FC<SidebarProps> = ({ name }) => {
  return (
    <div className="sidebar">
      <div>
        <h1>Levo</h1>
        <h3>{name}</h3>
      </div>
      <div className="sidebar_reports">
        <div className="triangle" />
        <p>Test Reports</p>
      </div>
    </div>
  );
};

export default Sidebar;
