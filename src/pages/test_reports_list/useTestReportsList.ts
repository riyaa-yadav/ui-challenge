import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { Report, OrgDetails, Params } from "./types";

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
      setReports([
        {
          id: 1,
          name: "Wake",
          start_date: "2021-01-11T03:45:25Z",
          duration: 237494,
          failed_tests: 9,
          succeed_tests: 38,
        },
        {
          id: 2,
          name: "Ahmed",
          start_date: "2020-09-01T07:43:12Z",
          duration: 337553,
          failed_tests: 5,
          succeed_tests: 47,
        },
        {
          id: 3,
          name: "Cristine",
          start_date: "2020-09-16T22:10:41Z",
          duration: 105297,
          failed_tests: 3,
          succeed_tests: 37,
        },
        {
          id: 4,
          name: "Pia",
          start_date: "2020-08-23T09:40:12Z",
          duration: 164261,
          failed_tests: 9,
          succeed_tests: 30,
        },
        {
          id: 5,
          name: "Lotte",
          start_date: "2021-02-08T12:13:35Z",
          duration: 429475,
          failed_tests: 3,
          succeed_tests: 40,
        },
        {
          id: 6,
          name: "Mellie",
          start_date: "2021-02-14T17:40:57Z",
          duration: 211767,
          failed_tests: 8,
          succeed_tests: 37,
        },
        {
          id: 7,
          name: "Vernor",
          start_date: "2021-06-26T03:58:02Z",
          duration: 305384,
          failed_tests: 9,
          succeed_tests: 45,
        },
        {
          id: 8,
          name: "Pandora",
          start_date: "2020-10-09T16:41:22Z",
          duration: 556794,
          failed_tests: 8,
          succeed_tests: 31,
        },
        {
          id: 9,
          name: "Brittne",
          start_date: "2021-03-29T21:45:01Z",
          duration: 473194,
          failed_tests: 7,
          succeed_tests: 40,
        },
        {
          id: 10,
          name: "Ophelie",
          start_date: "2020-11-23T14:24:06Z",
          duration: 166926,
          failed_tests: 2,
          succeed_tests: 31,
        },
      ]);
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
    fetchReports();
  }, [orgId]);

  return {
    states: { orgDetailsLoading, orgDetails, reportsLoading, reports, orgId },
  };
};

export default useTestReportList;
