export type Params = {
  orgId: string;
  reportId: string;
};

export type Endpoint = {
  url: string;
  duration: number;
  status: string;
};

export type ReportDetails = {
  id: number;
  endpoints: Endpoint[];
  end_date: string;
  duration: number;
  job_name: string;
  branch: string;
  github_user: string;
  commit: string;
  environment_url: string;
};

export type OrgDetails = {
  id: number;
  name: string;
};

export type FilterData = { [key: string]: Endpoint[] };

type UseTestReportListState = {
  orgDetailsLoading: boolean;
  orgDetails: OrgDetails | null;
  reportDetailsLoading: boolean;
  reportDetails: ReportDetails | null;
  filterData: FilterData;
};

export type UseTestReportDetailsReturnType = {
  states: UseTestReportListState;
  functions: {
    onFilter: () => void;
  };
};
