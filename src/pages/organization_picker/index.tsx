import React from "react";
import { Link } from "react-router-dom";
import useOrganizationPicker from "./useOrganizationPicker";
import { Organization } from "./types";
import orgImg from "../../assets/images/org.png";
import "./index.css";

const OrganizationPicker: React.FC = () => {
  const {
    states: { loading, organizations },
  } = useOrganizationPicker();

  return (
    <div className="organization-picker">
      <h1>Levo</h1>
      <div className="organizations_container">
        {loading ? (
          <div className="loader">
            <div className="spinner"></div>
          </div>
        ) : (
          <>
            <h2>Organizations</h2>
            <p>Pick the organization you want to access to</p>
            <div className="organization_list">
              {organizations.map((org: Organization) => (
                <Link
                  key={org.id}
                  className="organization"
                  to={`/test-reports-list/${org.id}`}
                >
                  <img height={"40px"} width={"40px"} src={orgImg} />
                  <div className="organisation_name">
                    <h4>{org.name}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrganizationPicker;
