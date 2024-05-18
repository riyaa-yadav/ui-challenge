export type Report = {
  id: number;
  name: string;
  start_date: string;
  duration: number;
  failed_tests: number;
  succeed_tests: number;
};

export type OrgDetails = {
  id: number;
  name: string;
};

export type Params = {
  orgId: string;
};
