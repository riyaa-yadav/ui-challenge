import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FilterData } from "../../pages/test_report_details/types";
import { convertMilliseconds, toSentenceCase } from "../../utils/functions";
import "./index.css";

type StatusProps = {
  status: string;
};

const Icons: React.FC<StatusProps> = ({ status }) => {
  switch (status) {
    case "success":
      return <IoCheckmarkCircleSharp />;
    case "failure":
      return <RxCrossCircled />;
    default:
      return <></>;
  }
};

type FilterProps = {
  filterData: FilterData;
  onFilter: () => void;
  totalCount: number | undefined;
};

const Filter: React.FC<FilterProps> = ({
  filterData,
  onFilter,
  totalCount,
}) => {
  return (
    <div className="filter">
      <input type="text" placeholder="Filter by endpoint" />
      {Object.keys(filterData).map(
        (key) =>
          filterData[key].length > 0 && (
            <div key={key}>
              <div className="result_type">
                <div className={`${key.toLowerCase()}_header`}>
                  <Icons status={key.toLowerCase()} />
                </div>
                <h3>
                  {toSentenceCase(key)} Tests ({filterData[key].length} /{" "}
                  {totalCount})
                </h3>
              </div>
              <div className="result_list">
                {filterData[key].map((item, index) => (
                  <div
                    className={`result ${key.toLowerCase()}_result`}
                    key={index}
                  >
                    <p> {item.url}</p>
                    <p> {convertMilliseconds(item.duration)}</p>
                  </div>
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Filter;
