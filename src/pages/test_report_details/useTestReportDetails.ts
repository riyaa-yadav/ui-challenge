import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import {
  Params,
  OrgDetails,
  ReportDetails,
  Endpoint,
  FilterData,
  UseTestReportDetailsReturnType,
} from "./types";

const useTestReportDetails = () => {
  const { orgId, reportId } = useParams<Params>();
  const [orgDetailsLoading, setOrgDetailsLoading] = useState<boolean>(true);
  const [orgDetails, setOrgDetails] = useState<OrgDetails | null>(null);
  const [reportDetailsLoading, setReportDetailsLoading] =
    useState<boolean>(true);
  const [reportDetails, setReportDetails] = useState<ReportDetails | null>(
    null
  );
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

  const onFilter = () => {};

  const fetchReportDetails = async () => {
    setReportDetailsLoading(true);
    try {
      // const response = await api.get(`organizations/${orgId}/reports/${reportId}/details.json?key=2e435a20`);
      const endpoints: Endpoint[] = [
        {
          url: "/accumsan/felis/ut.js",
          duration: 18389,
          status: "SUCCESS",
        },
        {
          url: "/natoque/penatibus/et/magnis.xml",
          duration: 21920,
          status: "SUCCESS",
        },
        {
          url: "/mus/vivamus.xml",
          duration: 23784,
          status: "FAILURE",
        },
        {
          url: "/libero.json",
          duration: 20821,
          status: "ERROR",
        },
        {
          url: "/pellentesque/ultrices/phasellus/id/sapien/in/sapien.html",
          duration: 20134,
          status: "ERROR",
        },
        {
          url: "/penatibus/et/magnis/dis/parturient/montes/nascetur.aspx",
          duration: 19049,
          status: "SUCCESS",
        },
        {
          url: "/aliquam/augue/quam.html",
          duration: 2260,
          status: "FAILURE",
        },
        {
          url: "/sapien/in/sapien/iaculis/congue/vivamus/metus.html",
          duration: 20301,
          status: "ERROR",
        },
        {
          url: "/amet/cursus/id/turpis/integer/aliquet/massa.js",
          duration: 18441,
          status: "SUCCESS",
        },
        {
          url: "/mauris/non/ligula/pellentesque/ultrices.aspx",
          duration: 14662,
          status: "ERROR",
        },
        {
          url: "/turpis/integer/aliquet/massa/id/lobortis.aspx",
          duration: 15704,
          status: "FAILURE",
        },
        {
          url: "/nec/nisi.js",
          duration: 21472,
          status: "ERROR",
        },
        {
          url: "/lacus/curabitur/at.xml",
          duration: 20815,
          status: "SUCCESS",
        },
        {
          url: "/congue/eget.png",
          duration: 4356,
          status: "SUCCESS",
        },
        {
          url: "/consectetuer/adipiscing/elit/proin/risus/praesent.aspx",
          duration: 13114,
          status: "FAILURE",
        },
        {
          url: "/in/lectus/pellentesque/at/nulla/suspendisse.jpg",
          duration: 16491,
          status: "ERROR",
        },
        {
          url: "/nam/ultrices/libero/non/mattis.jsp",
          duration: 29590,
          status: "ERROR",
        },
        {
          url: "/nulla.js",
          duration: 9713,
          status: "ERROR",
        },
        {
          url: "/placerat/praesent/blandit.jsp",
          duration: 20417,
          status: "FAILURE",
        },
        {
          url: "/turpis.aspx",
          duration: 26188,
          status: "FAILURE",
        },
        {
          url: "/nisi.jpg",
          duration: 3979,
          status: "SUCCESS",
        },
        {
          url: "/lectus/in.png",
          duration: 9208,
          status: "SUCCESS",
        },
      ];
      setReportDetails({
        id: 123,
        endpoints,
        end_date: "2021-02-08T04:43:50Z",
        duration: 988600,
        job_name: "Kanlam",
        branch: "Beahan, McCullough and Balistreri",
        github_user: "sbreede0",
        commit: "8i56xn1wq7",
        environment_url: "http://shareasale.com",
      });
      setFilterData(categorizeEndpoints(endpoints));
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
      setOrgDetails({
        id: 1,
        name: "Pixoboo",
      });
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
