import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Organization } from "./types";

type UseOrganizationPickerState = {
  loading: boolean;
  organizations: Organization[];
};

const useOrganizationPicker = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [organizations, setOrganizations] = useState<Organization[]>([]);

  useEffect(() => {
    const fetchOrganizations = async () => {
      setLoading(true);
      try {
        // const response = await api.get<Organization[]>("organizations.json?key=2e435a20");
        setOrganizations([
          { id: "123", name: "Org A" },
          { id: "23", name: "Org B" },
        ]);
      } catch (error) {
        console.error("Error fetching organizations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrganizations();
  }, []);

  const states: UseOrganizationPickerState = {
    loading,
    organizations,
  };

  return { states };
};
export default useOrganizationPicker;
