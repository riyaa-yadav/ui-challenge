import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { Report, OrgDetails, Params } from "./types";
import { orgDetailsData, reportListData } from "../../utils/constant";

const useTestReportList = () => {
  const { orgId } = useParams<Params>();
  const [reportsLoading, setReportsLoading] = useState<boolean>(true);
  const [reports, setReports] = useState<Report[]>([]);
  const [orgDetailsLoading, setOrgDetailsLoading] = useState<boolean>(true);
  const [orgDetails, setOrgDetails] = useState<OrgDetails | null>(null);

  const fetchReports = async () => {
    setReportsLoading(true);
    try {
      // const response = await api.get(`organizations/${orgId}/reports.json?key=2e435a20`);
      setReports(reportListData);
    } catch (error) {
      console.error("Error fetching reports:", error);
    } finally {
      setReportsLoading(false);
    }
  };

  const fetchOrgsDetails = async () => {
    setOrgDetailsLoading(true);
    try {
      // const response = await api.get(`organizations/${orgId}.json?key=2e435a20`);
      setOrgDetails(orgDetailsData);
    } catch (error) {
      console.error("Error fetching org details:", error);
    } finally {
      setOrgDetailsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrgsDetails();
    fetchReports();
  }, [orgId]);

  return {
    states: { orgDetailsLoading, orgDetails, reportsLoading, reports, orgId },
  };
};

export default useTestReportList;
