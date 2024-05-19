import { RxCrossCircled } from "react-icons/rx";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { MdExpandLess } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import { FilterData } from "../../pages/test_report_details/types";
import { convertMilliseconds, toSentenceCase } from "../../utils/functions";
import useFilter from "./useFilter";
import "./index.css";

type StatusProps = {
  status: string;
};

const Icons: React.FC<StatusProps> = ({ status }) => {
  switch (status) {
    case "success":
      return <IoCheckmarkCircleSharp fontSize={"20px"} />;
    case "failure":
      return <RxCrossCircled fontSize={"20px"} />;
    default:
      return <></>;
  }
};

type FilterProps = {
  filterData: FilterData;
  onFilter: (url: string) => void;
  totalCount: number | undefined;
};

const Filter: React.FC<FilterProps> = (props) => {
  const { filterData, onFilter, totalCount } = props;
  const {
    states: { expandedSections },
    functions: { toggleSection },
  } = useFilter(props);

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by endpoint..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const inputValue = e.currentTarget.value.trim();
            onFilter(inputValue);
          }
        }}
      />
      {Object.keys(filterData).map(
        (key) =>
          filterData[key].length > 0 && (
            <div key={key}>
              <div className="result_type" onClick={() => toggleSection(key)}>
                {expandedSections[key] ? (
                  <MdExpandLess fontSize={"25px"} />
                ) : (
                  <MdExpandMore fontSize={"25px"} />
                )}
                <div className={`${key.toLowerCase()}_header`}>
                  <Icons status={key.toLowerCase()} />
                </div>
                <h3>
                  {toSentenceCase(key)} Tests ({filterData[key].length} /{" "}
                  {totalCount})
                </h3>
              </div>
              {expandedSections[key] && (
                <div className="result_list">
                  {filterData[key].map((item, index) => (
                    <div
                      className={`result ${key.toLowerCase()}_result`}
                      key={index}
                    >
                      <p>{item.url}</p>
                      <p>{convertMilliseconds(item.duration)}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
      )}
    </div>
  );
};

export default Filter;
