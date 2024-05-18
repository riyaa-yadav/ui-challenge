import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Loader from "../../components/loader";
import useTestReportList from "./useTestReportsList";
import { timeAgo, convertMilliseconds } from "../../utils/functions";
import { Report } from "./types";
import "./index.css";

const TestReportList: React.FC = () => {
  const {
    states: { orgDetailsLoading, orgDetails, reportsLoading, reports, orgId },
  } = useTestReportList();

  return (
    <div className="main_content">
      <Sidebar name={orgDetails?.name} loading={orgDetailsLoading} />
      <div className="report_list_container">
        <h2>Test Report</h2>
        {reportsLoading ? (
          <Loader />
        ) : (
          <div className="report_list">
            {reports?.map((report: Report) => {
              const {
                id,
                name,
                start_date,
                duration,
                failed_tests,
                succeed_tests,
              } = report;
              return (
                <Link
                  key={id}
                  className="report"
                  to={`/test-report-details/${orgId}/${id}`}
                >
                  <div>
                    <h4>{name}</h4>
                    <p>
                      {timeAgo(start_date)} ago -{" "}
                      {convertMilliseconds(duration)} long
                    </p>
                  </div>
                  <div>
                    <p className="passed">{succeed_tests} passed</p>
                    <p className="failed">{failed_tests} failed</p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestReportList;
