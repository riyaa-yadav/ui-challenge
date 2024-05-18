import useTestReportDetails from "./useTestReportDetails";

const TestReportDetails = () => {
  const {
    states: {},
    function: {},
  } = useTestReportDetails();
  return (
    <div>
      <h1>Test Report Details</h1>
    </div>
  );
};

export default TestReportDetails;
