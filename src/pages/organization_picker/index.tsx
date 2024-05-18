import useOrganizationPicker from "./useOrganizationPicker";

const OrganizationPicker = () => {
  const {
    states: {},
    function: {},
  } = useOrganizationPicker();
  return (
    <div>
      <h1>Organization Picker</h1>
    </div>
  );
};

export default OrganizationPicker;
