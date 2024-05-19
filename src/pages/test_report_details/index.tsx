import React from "react";
import Sidebar from "../../components/sidebar";
import Loader from "../../components/loader";
import Breadcrumbs from "../../components/breadcrumbs";
import Status from "../../components/status";
import useTestReportDetails from "./useTestReportDetails";
import Filter from "../../components/filter";
import ReportInfo from "../../components/reportInfo";
import "./index.css";

const TestReportDetails: React.FC = () => {
  const {
    states: {
      orgDetails,
      orgDetailsLoading,
      reportDetailsLoading,
      reportDetails,
      filterData,
    },
    functions: { onFilter },
  } = useTestReportDetails();

  const breadcrumbsData = [
    {
      label: "Test Reports",
      link: `../../${orgDetails?.id}/reports-list`,
    },
    { label: reportDetails?.job_name || "", link: "" },
  ];

  const reportInfoData = {
    duration: reportDetails?.duration,
    ago: reportDetails?.end_date,
    id: reportDetails?.id?.toString(),
    branch: reportDetails?.branch,
    commit: reportDetails?.commit,
    user: reportDetails?.github_user,
    url: reportDetails?.environment_url,
  };

  return (
    <div className="main_content">
      <Sidebar name={orgDetails?.name} loading={orgDetailsLoading} />
      <div className="report_details_container">
        {reportDetailsLoading ? (
          <Loader />
        ) : (
          <div className="report_details">
            <div className="header">
              <Breadcrumbs items={breadcrumbsData} />
              <Status
                status={
                  filterData["SUCCESS"].length ===
                  reportDetails?.endpoints?.length
                    ? "success"
                    : "failed"
                }
              />
            </div>
            <ReportInfo data={reportInfoData} />
            <div>
              <div className="results_container">
                <h3>Results</h3>
              </div>
              <Filter
                totalCount={reportDetails?.endpoints?.length}
                {...{ filterData, onFilter }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestReportDetails;
