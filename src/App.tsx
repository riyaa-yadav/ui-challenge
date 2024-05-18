import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import "./App.css";

// Lazy-loaded components
const OrganizationPicker = lazy(() => import("./pages/organization_picker"));
const TestReportsList = lazy(() => import("./pages/test_reports_list"));
const TestReportDetails = lazy(() => import("./pages/test_report_details"));

// Define the type for the routes
type RouteConfig = {
  path: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
};

// Define the routes object with proper typing
const routes: Record<string, RouteConfig> = {
  organizationPicker: {
    path: "/",
    component: OrganizationPicker,
  },
  testReportsList: {
    path: "/test-reports-list/:orgId",
    component: TestReportsList,
  },
  testReportDetails: {
    path: "/test-report-details/:orgId/:reportId",
    component: TestReportDetails,
  },
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Object.keys(routes).map((key) => {
            const { path, component: Component } = routes[key];
            return (
              <Route
                key={key}
                path={path}
                element={<Layout component={Component} />}
              />
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
