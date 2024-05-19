import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import "./index.css";

type StatusProps = {
  status: string;
};

const Icons: React.FC<StatusProps> = ({ status }) => {
  switch (status) {
    case "success":
      return <IoCheckmarkCircleSharp />;
    case "failed":
      return <RxCrossCircled />;
    default:
      return <></>;
  }
};

const Status: React.FC<StatusProps> = ({ status }) => {
  return (
    <div className={`status_container status_${status}`}>
      <Icons status={status} />
      <span>{status}</span>
    </div>
  );
};

export default Status;
