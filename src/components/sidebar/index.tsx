import React from "react";
import { Link } from "react-router-dom";
import Loader from "../loader";
import "./index.css";

type SidebarProps = {
  name: string | undefined;
  loading: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ name, loading }) => {
  return (
    <div className="sidebar">
      <div>
        <Link to="/">
          <h1>Levo</h1>
        </Link>
        {loading ? <Loader /> : <h3>{name}</h3>}
      </div>
      <div className="sidebar_reports">
        <div className="triangle" />
        <p>Test Reports</p>
      </div>
    </div>
  );
};

export default Sidebar;
