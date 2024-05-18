import useTestReportList from "./useTestReportsList";
const TestReportList = () => {
  const {
    states: {},
    function: {},
  } = useTestReportList();
  return (
    <div>
      <h1>Test Report List</h1>
    </div>
  );
};

export default TestReportList;
