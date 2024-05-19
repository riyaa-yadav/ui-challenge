import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import {
  Params,
  OrgDetails,
  ReportDetails,
  Endpoint,
  UseTestReportDetailsReturnType,
} from "./types";
import { reportDetailsData, orgDetailsData } from "../../utils/constant";

const useTestReportDetails = () => {
  const { orgId, reportId } = useParams<Params>();
  const [orgDetailsLoading, setOrgDetailsLoading] = useState<boolean>(true);
  const [orgDetails, setOrgDetails] = useState<OrgDetails | null>(null);
  const [reportDetailsLoading, setReportDetailsLoading] =
    useState<boolean>(true);
  const [reportDetails, setReportDetails] = useState<ReportDetails | null>(
    null
  );
  const [allFilterData, setAllFilterData] = useState<FilterData>({});
  const [filterData, setFilterData] = useState<FilterData>({});

  const categorizeEndpoints = (endpoints: Endpoint[]): FilterData => {
    return endpoints.reduce((acc, endpoint) => {
      const statusKey =
        endpoint.status === "FAILED" || endpoint.status === "ERROR"
          ? "FAILURE"
          : endpoint.status;
      if (!acc[statusKey]) {
        acc[statusKey] = [];
      }
      acc[statusKey].push(endpoint);
      return acc;
    }, {} as FilterData);
  };

  type FilterData = {
    [key: string]: Endpoint[];
  };

  const onFilter = (url: string) => {
    const filteredRes: FilterData = {};
    for (const key in allFilterData) {
      filteredRes[key] = allFilterData[key].filter((item) =>
        item.url.includes(url)
      );
    }
    setFilterData(filteredRes);
  };

  const fetchReportDetails = async () => {
    setReportDetailsLoading(true);
    try {
      // const response = await api.get(`organizations/${orgId}/reports/${reportId}/details.json?key=2e435a20`);

      setReportDetails(reportDetailsData);
      const categorizeEndpointsData = categorizeEndpoints(
        reportDetailsData.endpoints
      );
      setAllFilterData(categorizeEndpointsData);
      setFilterData(categorizeEndpointsData);
    } catch (error) {
      console.error("Error fetching report details:", error);
    } finally {
      setReportDetailsLoading(false);
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
    fetchReportDetails();
  }, []);

  const returnData: UseTestReportDetailsReturnType = {
    states: {
      orgDetailsLoading,
      orgDetails,
      reportDetailsLoading,
      reportDetails,
      filterData,
    },
    functions: {
      onFilter,
    },
  };

  return returnData;
};

export default useTestReportDetails;
