import React from "react";
import "./index.css";

type LayoutProps = {
  component: React.ComponentType;
};

const Layout: React.FC<LayoutProps> = ({ component: Component }) => {
  return (
    <div>
      <div className="top_header">
        <div className="dots_container">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <Component />
    </div>
  );
};

export default Layout;
