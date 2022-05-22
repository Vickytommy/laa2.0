import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { AllRoutes } from "./routes";
import Layout from "./components/common/Layout";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Layout>
        <BrowserRouter >
          <Routes>
            <Route path={AllRoutes.Dashboard.path} element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </Layout>

    </>
  );
}

export default App;
