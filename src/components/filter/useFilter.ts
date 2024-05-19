import React, { useState } from "react";
import { FilterData } from "../../pages/test_report_details/types";

type ExpandedSections = {
  [key: string]: boolean;
};

type UseFilterProps = {
  filterData: FilterData;
};

type UseFilterReturn = {
  states: {
    expandedSections: ExpandedSections;
  };
  functions: {
    toggleSection: (key: string) => void;
  };
};

const useFilter = ({ filterData }: UseFilterProps): UseFilterReturn => {
  const initialExpandedState: ExpandedSections = Object.keys(filterData).reduce(
    (acc, key) => {
      acc[key] = true;
      return acc;
    },
    {} as ExpandedSections
  );

  const [expandedSections, setExpandedSections] =
    useState<ExpandedSections>(initialExpandedState);

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return {
    states: { expandedSections },
    functions: { toggleSection },
  };
};

export default useFilter;
