import React from "react";
import { IoMdTime, IoIosGitBranch, IoLogoGithub } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { GoPackage } from "react-icons/go";
import { VscGitCommit } from "react-icons/vsc";
import { TbWorldWww } from "react-icons/tb";
import "./index.css";
import { timeAgo, convertMilliseconds } from "../../utils/functions";

type ReportInfoData = {
  duration: number | undefined;
  ago: string | undefined;
  id: string | undefined;
  branch: string | undefined;
  commit: string | undefined;
  user: string | undefined;
  url: string | undefined;
};

type ReportInfoProps = {
  data: ReportInfoData;
};

const ReportInfo: React.FC<ReportInfoProps> = ({ data }) => {
  const reportInfoData = {
    row1: [
      {
        icon: <IoMdTime />,
        value: data.duration ? convertMilliseconds(data.duration) : "",
        class: "",
      },
      {
        icon: <CiCalendar />,
        value: data.ago ? `${timeAgo(data.ago)} ago` : "",
        class: "",
      },
    ],
    row2: [
      {
        icon: <GoPackage />,
        value: `build-and-deploy (${data.id})`,
        class: "build",
      },
    ],
    row3: [
      { icon: <IoIosGitBranch />, value: data.branch ?? "", class: "" },
      { icon: <VscGitCommit />, value: data.commit ?? "", class: "" },
      { icon: <IoLogoGithub />, value: data.user ?? "", class: "" },
    ],
    row4: [{ icon: <TbWorldWww />, value: data.url ?? "", class: "" }],
  };

  return (
    <div className="report_info">
      {Object?.keys(reportInfoData)?.map((rowKey, rowIndex) => (
        <div key={rowIndex} className="report_info_row">
          {(reportInfoData as any)[rowKey].map(
            (
              item: {
                icon: React.ReactElement;
                value: string;
                class: string;
              },
              itemIndex: number
            ) => (
              <div key={itemIndex} className="report_info_item">
                {item.icon}
                <span className={item.class}>{item.value}</span>
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default ReportInfo;
